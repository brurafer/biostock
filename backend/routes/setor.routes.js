import express from 'express';
import { getSetores } from '../controllers/setor.controller.js';
import { autenticar } from '../middleware/auth.js';

const router = express.Router();

// Rota protegida
router.get('/', autenticar, getSetores);

export default router;
