import { Insumo } from '../models/index.js';
import Sequelize from 'sequelize';

const { Op } = Sequelize;

export const listarInsumos = async (req, res) => {
  try {
    const insumos = await Insumo.findAll();
    res.json(insumos);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao listar insumos' });
  }
};

export const criarInsumo = async (req, res) => {
  try {
    const novo = await Insumo.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao criar insumo' });
  }
};

export const verificarEstoqueMinimo = async (req, res) => {
  try {
    const alertas = await Insumo.findAll({
      where: {
        quantidade_total: {
          [Op.lte]: Sequelize.col('nivel_minimo')
        }
      }
    });
    res.json(alertas);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao verificar estoque' });
  }
};
