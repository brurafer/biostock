const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Historico = sequelize.define('Historico', {
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipo_movimentacao: {
      type: DataTypes.ENUM('entrada', 'saida'),
      allowNull: false,
    },
    data_movimentacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });

  return Historico;
};
