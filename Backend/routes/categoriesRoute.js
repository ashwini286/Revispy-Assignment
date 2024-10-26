import express from 'express';
import { getCategories, selectCategory } from '../controllers/categoryController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getCategories);
router.post('/select', authMiddleware, selectCategory);

export default router;
