const Sequelize = require('sequelize');
const config = require('../database/config');
const UserModel = require('./User');
const RequestModel = require('./Request');
const ProductModel = require('./Product');
const StockModel = require('./Stock');

// ⚠️ Use apenas ESSA versão da conexão, não as duas!
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const User = UserModel(sequelize);
const Request = RequestModel(sequelize);
const Product = ProductModel(sequelize);
const Stock = StockModel(sequelize);

// Relações entre os modelos
User.hasMany(Request);
Request.belongsTo(User);

Product.hasMany(Stock);
Stock.belongsTo(Product);

Request.belongsTo(Product);
Request.belongsTo(User);

module.exports = {
  sequelize,
  User,
  Request,
  Product,
  Stock
};
