export default (sequelize, DataTypes) => {
  const Solicitacao = sequelize.define('Solicitacao', {
    setor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    insumo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pendente'
    }
  });

  return Solicitacao;
};
