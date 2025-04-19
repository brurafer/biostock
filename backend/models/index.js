import Sequelize from 'sequelize';

import SetorModel from './Setor.js';
import InsumoModel from './Insumo.js';
import SolicitacaoModel from './Solicitacao.js';
import NotificationModel from './Notification.js';
import UserModel from './User.js';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const Setor = SetorModel(sequelize, Sequelize.DataTypes);
const Insumo = InsumoModel(sequelize, Sequelize.DataTypes);
const Solicitacao = SolicitacaoModel(sequelize, Sequelize.DataTypes);
const Notification = NotificationModel(sequelize, Sequelize.DataTypes);
const User = UserModel(sequelize, Sequelize.DataTypes);

export {
  sequelize,
  Setor,
  Insumo,
  Solicitacao,
  Notification,
  User
};
