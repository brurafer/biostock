import express from 'express';
import {
  listarNotificacoes,
  criarNotificacao,
  marcarComoLida
} from '../controllers/NotificationController.js';
import { autenticar } from '../middleware/auth.js';

const router = express.Router();

// Todas as rotas de notificação são protegidas
router.get('/', autenticar, listarNotificacoes);
router.post('/', autenticar, criarNotificacao);
router.put('/:id/lida', autenticar, marcarComoLida);

export default router;
