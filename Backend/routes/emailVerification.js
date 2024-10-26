import express from 'express';
import { verifyEmail } from './emailController.js';

const router = express.Router();

router.get('/:email', verifyEmail); // Assuming email verification via GET for simplicity

export default router;
