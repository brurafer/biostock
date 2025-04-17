const express = require('express');
const router = express.Router();

const userRoutes = require('./user.routes');
const insumoRoutes = require('./insumo.routes');
const solicitacaoRoutes = require('./solicitacao.routes');
const authRoutes = require('./auth.routes'); // <- nova linha

router.use('/users', userRoutes);
router.use('/insumos', insumoRoutes);
router.use('/solicitacoes', solicitacaoRoutes);
router.use('/auth', authRoutes); // <- nova linha

module.exports = router;
