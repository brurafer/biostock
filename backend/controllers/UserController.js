import { User } from '../models/index.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserController = {
  login: async (req, res) => {
    const { email, senha } = req.body;

    try {
      const user = await User.findOne({ where: { email } });

      if (!user || !(await bcrypt.compare(senha, user.senha))) {
        return res.status(401).json({ mensagem: 'Credenciais inválidas' });
      }

      const token = jwt.sign({ id: user.id, tipo_usuario: user.tipo_usuario }, 'seuSegredo', {
        expiresIn: '1d',
      });

      res.json({ token, tipo_usuario: user.tipo_usuario, nome: user.nome });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensagem: 'Erro no servidor' });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ mensagem: 'Erro ao buscar usuários' });
    }
  },
};

export default UserController;
