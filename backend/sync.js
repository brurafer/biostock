import { sequelize } from './models/index.js';

async function syncDatabase() {
  try {
    await sequelize.sync({ force: false }); // force: true recria as tabelas toda vez
    console.log('✅ Banco de dados sincronizado com sucesso.');
  } catch (error) {
    console.error('❌ Erro ao sincronizar o banco de dados:', error);
  } finally {
    await sequelize.close();
  }
}

syncDatabase();
