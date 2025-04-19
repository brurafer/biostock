import { User } from '../models/index.js';

const criarAdmin = async () => {
  try {
    await User.create({
      nome: 'Admin',
      email: 'admin@biostock.com',
      senha: '123456',
      tipo: 'admin',
    });

    console.log('✅ Admin criado com sucesso!');
    process.exit();
  } catch (error) {
    console.error('❌ Erro ao criar admin:', error);
    process.exit(1);
  }
};

criarAdmin();
