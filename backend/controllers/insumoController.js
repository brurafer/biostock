import { Insumo } from '../models/index.js'

export const listarInsumos = async (req, res) => {
  const insumos = await Insumo.findAll()
  res.json(insumos)
}

export const verificarEstoqueMinimo = async (req, res) => {
  const alertas = await Insumo.findAll({
    where: {
      quantidade_total: { [Op.lte]: Sequelize.col('nivel_minimo') }
    }
  })
  res.json(alertas)
}
