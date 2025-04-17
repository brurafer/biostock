const express = require('express');
const router = express.Router();

// Exemplo de rota para autenticação, se quiser usar no futuro
router.post('/login', (req, res) => {
  const { email, senha } = req.body;

  if (email === 'admin@biostock.com' && senha === '123456') {
    return res.status(200).json({ token: 'fake-jwt-token', tipo_usuario: 'admin' });
  }

  return res.status(401).json({ mensagem: 'Credenciais inválidas' });
});

module.exports = router;
