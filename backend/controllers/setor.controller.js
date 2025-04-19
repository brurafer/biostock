import { Setor } from '../models/index.js';

export const getSetores = async (req, res) => {
  try {
    const setores = await Setor.findAll();
    res.json(setores);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar setores' });
  }
};
