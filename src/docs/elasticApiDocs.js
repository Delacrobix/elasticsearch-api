const elasticApiDocs = {
  openapi: '3.0.0',
  info: {
    title: 'Elasticsearch API',
    version: '1.0.0',
    description: 'API for managing Elasticsearch documents and indices.',
  },
  servers: [
    {
      url: '',
    },
  ],
  paths: {
    '/{indexName}/documents': {
      get: {
        summary: 'Get documents from an index',
        parameters: [
          {
            name: 'indexName',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          200: {
            description: 'Successful response',
            content: {
              'application/json': {
                example: {
                  response: 'Success',
                  count: 10,
                  data: [],
                },
              },
            },
          },
          404: {
            description: 'Index not found',
            content: {
              'application/json': {
                example: {
                  response: 'Index not found',
                },
              },
            },
          },
        },
      },
      post: {
        summary: 'Bulk insert documents into an index',
        parameters: [
          {
            name: 'indexName',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              example: {
                data: [],
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Successful response',
            content: {
              'application/json': {
                example: {
                  response: 'Success',
                  count: 10,
                },
              },
            },
          },
          400: {
            description: 'Bad Request',
            content: {
              'application/json': {
                example: {
                  response: 'Bad Request. Data field is empty',
                },
              },
            },
          },
        },
      },
    },
    '/{indexName}/document/{id}': {
      put: {
        summary: 'Add a document to an index',
        parameters: [
          {
            name: 'indexName',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              example: {
                data: {},
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Successful response',
            content: {
              'application/json': {
                example: {
                  response: 'Success',
                  details: {},
                },
              },
            },
          },
          400: {
            description: 'Bad Request',
            content: {
              'application/json': {
                example: {
                  response: 'Bad Request. Empty data',
                },
              },
            },
          },
        },
      },
    },
    '/{indexName}/documents/{id}': {
      get: {
        summary: 'Get a document by ID',
        parameters: [
          {
            name: 'indexName',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          200: {
            description: 'Successful response',
            content: {
              'application/json': {
                example: {
                  response: 'success',
                  data: {},
                },
              },
            },
          },
          404: {
            description: 'Document not found',
            content: {
              'application/json': {
                example: {
                  response: 'Error',
                  message: 'Document not found',
                },
              },
            },
          },
        },
      },
    },
    '/{indexName}/search': {
      get: {
        summary: 'Search for documents in an index',
        parameters: [
          {
            name: 'indexName',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'q',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'filters',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          200: {
            description: 'Successful response',
            content: {
              'application/json': {
                example: {
                  response: 'Success',
                  data: {},
                },
              },
            },
          },
          400: {
            description: 'Bad Request',
            content: {
              'application/json': {
                example: {
                  response: 'Bad Request. Data field is empty',
                },
              },
            },
          },
          404: {
            description: 'Index not found',
            content: {
              'application/json': {
                example: {
                  response: 'Index not found',
                },
              },
            },
          },
        },
      },
    },
  },
};

export default elasticApiDocs;
