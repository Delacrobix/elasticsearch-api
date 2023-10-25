const elasticApiDocs = {
  swagger: '2.0',
  info: {
    title: 'API Elasticsearch',
    description: 'description',
    version: '1.0.0',
  },
  host: '',
  basePath: '/',
  paths: {
    '/{indexName}/documents': {
      post: {
        summary: 'Bulk Insert Documents',
        description:
          'Insert multiple documents into the specified Elasticsearch index.',
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
          description: 'Array of documents to insert.',
          content: {
            'application/json': {
              schema: {
                type: 'array',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    response: {
                      type: 'string',
                      example: 'Success',
                    },
                    count: {
                      type: 'integer',
                      example: 10,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/{indexName}/document/{id}': {
      put: {
        summary: 'Add Document',
        description: 'Add a document to the specified Elasticsearch index.',
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
          description: 'Document data to add.',
          content: {
            'application/json': {
              schema: {
                type: 'object',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    response: {
                      type: 'string',
                      example: 'Success',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/{indexName}/documents/{id}': {
      get: {
        summary: 'Get Document',
        description:
          'Retrieve a document from the specified Elasticsearch index.',
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
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    response: {
                      type: 'string',
                      example: 'Success',
                    },
                    data: {
                      type: 'object',
                      example: {
                        field1: 'value1',
                        field2: 'value2',
                      },
                    },
                  },
                },
              },
            },
          },
          404: {
            description: 'Error',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    response: {
                      type: 'string',
                      example: 'Error',
                    },
                    message: {
                      type: 'string',
                      example: 'Document not found',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/{indexName}/search': {
      get: {
        summary: 'Search Documents',
        description:
          'Search for documents in the specified Elasticsearch index.',
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
        parameters: [
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
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                },
              },
            },
          },
        },
      },
    },
    '/{indexName}/documents': {
      get: {
        summary: 'Get Index Documents',
        description:
          'Retrieve all documents from the specified Elasticsearch index.',
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
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    response: {
                      type: 'string',
                      example: 'Success',
                    },
                    count: {
                      type: 'integer',
                      example: 10,
                    },
                    data: {
                      type: 'array',
                      items: {
                        type: 'object',
                        example: {
                          field1: 'value1',
                          field2: 'value2',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          404: {
            description: 'Error',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    response: {
                      type: 'string',
                      example: 'Error',
                    },
                    message: {
                      type: 'string',
                      example: 'Index not found',
                    },
                  },
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
