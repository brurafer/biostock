const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Solicitacao = sequelize.define('Solicitacao', {
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('pendente', 'aprovada', 'recusada', 'liberada', 'retirada'),
      defaultValue: 'pendente',
    },
    data_solicitacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    data_aprovacao: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    data_liberacao: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    data_retirada: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  return Solicitacao;
};
