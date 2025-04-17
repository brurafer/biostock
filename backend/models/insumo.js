const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Insumo = sequelize.define('Insumo', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantidade_total: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    nivel_minimo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Insumo;
};
