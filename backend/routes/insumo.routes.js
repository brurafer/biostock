import express from 'express';
import {
  listarInsumos,
  criarInsumo,
  verificarEstoqueMinimo
} from '../controllers/InsumoController.js';

const router = express.Router();

router.get('/', listarInsumos);
router.post('/', criarInsumo);
router.get('/alertas', verificarEstoqueMinimo);

export default router;
