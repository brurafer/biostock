// createTables.js
import sqlite3 from 'sqlite3';
sqlite3.verbose();

const db = new sqlite3.Database('./biostock.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      senha TEXT NOT NULL,
      tipo TEXT NOT NULL
    )
  `, (err) => {
    if (err) {
      console.error('❌ Erro ao criar tabela usuarios:', err.message);
    } else {
      console.log('✅ Tabela "usuarios" criada com sucesso!');
    }
    db.close();
  });
});
