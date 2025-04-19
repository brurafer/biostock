import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(401).json({ mensagem: 'Credenciais inválidas' });

    const senhaCorreta = await bcrypt.compare(senha, user.senha);
    if (!senhaCorreta) return res.status(401).json({ mensagem: 'Credenciais inválidas' });

    const token = jwt.sign(
      { id: user.id, tipo: user.tipo, nome: user.nome },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({ token, tipo: user.tipo, nome: user.nome });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro no servidor' });
  }
});

export default router;
