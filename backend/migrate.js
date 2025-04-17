const db = require('../models');
const bcrypt = require('bcrypt');

async function migrate() {
  await db.sequelize.sync({ force: true });

  const senhaHash = await bcrypt.hash('123456', 10);
  await db.User.bulkCreate([
    { nome: 'Técnico Teste', email: 'tecnico@teste.com', senha: senhaHash, tipo_usuario: 'tecnico' },
    { nome: 'Chefe Teste', email: 'chefe@teste.com', senha: senhaHash, tipo_usuario: 'chefe' },
    { nome: 'Lab Teste', email: 'lab@teste.com', senha: senhaHash, tipo_usuario: 'laboratorio' },
    { nome: 'Admin', email: 'admin@teste.com', senha: senhaHash, tipo_usuario: 'admin' }
  ]);

  console.log('✅ Migração concluída com sucesso!');
}

migrate();
