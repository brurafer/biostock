// seedAdmin.js
import sqlite3 from 'sqlite3';
sqlite3.verbose();

const db = new sqlite3.Database('./biostock.db');

const admin = {
  nome: 'Administrador',
  email: 'admin@biostock.com',
  senha: '123456', // sem hash por enquanto
  tipo: 'admin',
};

db.run(
  `INSERT INTO usuarios (nome, email, senha, tipo)
   VALUES (?, ?, ?, ?)`,
  [admin.nome, admin.email, admin.senha, admin.tipo],
  function (err) {
    if (err) {
      console.error('Erro ao inserir admin:', err.message);
    } else {
      console.log('✅ Admin inserido com sucesso!');
    }
    db.close();
  }
);
