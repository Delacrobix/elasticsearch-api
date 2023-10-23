import { Router } from 'express';
import {
  bulkInsertDocuments,
  addDocument,
  getDocument,
  searchDocuments,
  getIndexDocuments,
} from '../controllers/documentControllers';

export const router = Router();

router.post('/:indexName/documents', bulkInsertDocuments);
router.put('/:indexName/document/:id', addDocument);
router.get('/:indexName/documents/:id', getDocument);
router.get('/:indexName/documents', getIndexDocuments);

// GET /{indexName}/search?q={q}&filters={filters}
router.get('/:indexName/search', searchDocuments);
