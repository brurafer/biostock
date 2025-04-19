import { Notification } from '../models/index.js';

export const listarNotificacoes = async (req, res) => {
  try {
    const notificacoes = await Notification.findAll();
    res.json(notificacoes);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar notificações' });
  }
};

export const criarNotificacao = async (req, res) => {
  try {
    const nova = await Notification.create(req.body);
    res.status(201).json(nova);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao criar notificação' });
  }
};

export const marcarComoLida = async (req, res) => {
  try {
    const { id } = req.params;
    const notificacao = await Notification.findByPk(id);
    if (!notificacao) return res.status(404).json({ erro: 'Notificação não encontrada' });

    notificacao.lida = true;
    await notificacao.save();
    res.json(notificacao);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao marcar como lida' });
  }
};
