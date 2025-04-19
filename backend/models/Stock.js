import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Stock = sequelize.define('Stock', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  minQuantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});
