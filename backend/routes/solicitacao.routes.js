const express = require('express');
const router = express.Router();
const SolicitacaoController = require('../controllers/SolicitacaoController');

router.get('/', SolicitacaoController.listarSolicitacoes);
router.post('/', SolicitacaoController.criarSolicitacao);
router.put('/:id/aprovar', SolicitacaoController.aprovarSolicitacao);
router.put('/:id/recusar', SolicitacaoController.recusarSolicitacao);
router.put('/:id/liberar', SolicitacaoController.liberarSolicitacao);
router.put('/:id/confirmar-retirada', SolicitacaoController.confirmarRetirada);

module.exports = router;
