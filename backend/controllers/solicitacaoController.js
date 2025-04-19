import { Solicitacao } from '../models/index.js';

export const listarSolicitacoes = async (req, res) => {
  try {
    const lista = await Solicitacao.findAll();
    res.json(lista);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao listar solicitações' });
  }
};

export const criarSolicitacao = async (req, res) => {
  try {
    const nova = await Solicitacao.create(req.body);
    res.status(201).json(nova);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao criar solicitação' });
  }
};
