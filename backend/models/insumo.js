export default (sequelize, DataTypes) => {
  const Insumo = sequelize.define('Insumo', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING
    },
    quantidade_total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nivel_minimo: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Insumo;
};
