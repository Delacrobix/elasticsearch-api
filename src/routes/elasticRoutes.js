import { Router } from 'express';
import {
  bulkInsertDocuments,
  addDocument,
  getDocument,
  searchDocuments,
  getIndexDocuments,
  healthStatus,
} from '../controllers/documentControllers.js';

const elasticRouter = Router();

elasticRouter.get('/health', healthStatus);
elasticRouter.post('/:indexName/documents', bulkInsertDocuments);
elasticRouter.put('/:indexName/document/:id', addDocument);
elasticRouter.get('/:indexName/documents/:id', getDocument);
elasticRouter.get('/:indexName/documents', getIndexDocuments);
elasticRouter.get('/:indexName/search', searchDocuments);

export default elasticRouter;
