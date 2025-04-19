export default (sequelize, DataTypes) => {
  const Setor = sequelize.define('Setor', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Setor;
};
