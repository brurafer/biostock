import { Router } from 'express';

import loginRoutes from './login.routes.js';
import userRoutes from './user.routes.js';
import setorRoutes from './setor.routes.js';
import insumoRoutes from './insumo.routes.js';
import solicitacaoRoutes from './solicitacao.routes.js';
import notificationRoutes from './notification.routes.js';

const router = Router();

router.use('/login', loginRoutes);
router.use('/usuarios', userRoutes);
router.use('/setores', setorRoutes);
router.use('/insumos', insumoRoutes);
router.use('/solicitacoes', solicitacaoRoutes);
router.use('/notificacoes', notificationRoutes);

export default router;
