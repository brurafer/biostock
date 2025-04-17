const { User } = require('../models');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  const { email, senha } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user || !await bcrypt.compare(senha, user.senha)) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }

  res.json({ id: user.id, nome: user.nome, tipo_usuario: user.tipo_usuario });
};
