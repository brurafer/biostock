import express from 'express';
import {
  listarSolicitacoes,
  criarSolicitacao
} from '../controllers/SolicitacaoController.js';

const router = express.Router();

router.get('/', listarSolicitacoes);
router.post('/', criarSolicitacao);

export default router;
