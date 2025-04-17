const express = require('express');
const router = express.Router();
const InsumoController = require('../controllers/InsumoController');

router.get('/', InsumoController.listarInsumos);
router.post('/', InsumoController.criarInsumo);
router.get('/alertas', InsumoController.verificarEstoqueMinimo);

module.exports = router;
