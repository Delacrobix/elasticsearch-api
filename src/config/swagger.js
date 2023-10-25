import swaggerUi from 'swagger-ui-express';
import elasticApiDocs from '../docs/elasticApiDocs.js';

function swaggerDocs(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(elasticApiDocs));

  // Documentation in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(elasticApiDocs);
  });
}

export default swaggerDocs;
