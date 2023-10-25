import client from '../config/elasticsearch.js';
import { dataset } from '../utils/dummyData.js';

// POST path: /{indexName}/documents
export async function bulkInsertDocuments(req, res) {
  const indexName = req.params.indexName;

  //! Replace this for body content
  const data = [...dataset];

  try {
    const operations = data.flatMap((doc) => [
      { index: { _index: indexName } },
      doc,
    ]);

    const bulkResponse = await client.bulk({ refresh: true, operations });

    if (bulkResponse.errors) {
      const erroredDocuments = [];

      bulkResponse.items.forEach((action, i) => {
        const operation = Object.keys(action)[0];

        if (action[operation].error) {
          erroredDocuments.push({
            status: action[operation].status,
            error: action[operation].error,
            operation: operations[i * 2],
            document: operations[i * 2 + 1],
          });
        }
      });

      console.log(erroredDocuments);
    }

    const count = await client.count({ index: indexName });

    return res.status(200).json({
      response: 'Success',
      count: count,
    });
  } catch (e) {
    throw new Error(e);
  }
}

// PUT path:/{indexName}/document/{id}
export async function addDocument(req, res) {
  const indexName = req.params.indexName;
  const id = req.params.id;
  const data = req.body;

  try {
    const response = await client.index({
      index: indexName,
      id: id,
      document: data,
    });

    return res.status(200).json({
      response: 'Success',
    });
  } catch (e) {
    throw new Error(e);
  }
}

// GET path: /{indexName}/documents/{id}
export async function getDocument(req, res) {
  const indexName = req.params.indexName;
  const id = req.params.id;

  try {
    const result = await client.search({
      index: indexName,
      query: {
        match: {
          _id: id,
        },
      },
    });

    if (result.hits.total.value == 0) {
      return res.status(404).json({
        response: 'Error',
        message: 'Document not found',
      });
    } else {
      return res.status(200).json({
        response: 'success',
        data: result.hits.hits[0]._source,
      });
    }
  } catch (e) {
    throw new Error(e);
  }
}

// GET path: /{indexName}/search?q={q}&filters={filters}
export async function searchDocuments(req, res) {
  const { q, filters } = req.query;
  const { indexName } = req.params;

  const filtersArray = JSON.parse(filters);

  let filtersJson = filtersArray.map((filter) => {
    const fieldName = Object.keys(filter)[0];
    const fieldValue = filter[fieldName];

    return {
      term: {
        [fieldName]: fieldValue,
      },
    };
  });

  try {
    const result = await client.search({
      index: indexName,
      body: {
        query: {
          bool: {
            should: [
              {
                multi_match: {
                  query: q,
                  fields: ['*'],
                },
              },
            ],
            filter: filtersJson,
          },
        },
      },
    });

    return res.status(200).json({
      result,
    });
  } catch (e) {
    throw new Error(e);
  }
}

// GET path: /{indexName}/documents
export async function getIndexDocuments(req, res) {
  const indexName = req.params.indexName;

  try {
    const result = await client.search({
      index: indexName,
    });

    if (result.hits.total.value == 0) {
      return res.status(404).json({
        response: 'Error',
        message: 'Index not found',
      });
    } else {
      const data = result.hits.hits.map((doc) => {
        return doc._source;
      });

      return res.status(200).json({
        response: 'Success',
        count: result.hits.total.value,
        data,
      });
    }
  } catch (e) {
    throw new Error(e);
  }
}

// 1.- POST {indexName}/documents
// Permite agregar documentos en lotes, recibe un array de objetos JSON y utiliza la _bulk API de elasticsearch

// 2. PUT {indexName}/document/{id}
// Permite agregar un documento con la id {id}

// 3.- GET {indexName}/documents/{id}
// Permite retornar documento con id {id}

// 4.- GET {indexName}/search?q={q}&filters={filters}
// Donde {q} es la palabra que quiero buscar, {filters} es un array de filtros en el siguiente formato [{"campo":"valor"}]

// Reglas:

// 4. La aplicación debe estar disponible online (ocupar cualquier servicio gratuito como railway, o vercel)
// 7. La API debe incluir documentación online, hay librerías que la generan automático , ej: https://github.com/swagger-autogen/swagger-autogen
