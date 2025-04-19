import { User } from '../models/index.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await User.findOne({ where: { email, senha } });

    if (!usuario) {
      return res.status(401).json({ mensagem: 'Credenciais inválidas' });
    }

    const token = jwt.sign(
      { id: usuario.id, tipo: usuario.tipo },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );

    res.json({ token, tipo: usuario.tipo });
  } catch (error) {
    console.error('Erro no login:', error); // 👈 Adiciona esse log
    res.status(500).json({ erro: 'Erro ao realizar login' });
  }  
};
