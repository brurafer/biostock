// scripts/initDb.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function init() {
  const db = await open({
    filename: path.join(__dirname, '../database/biostock.db'),
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      senha TEXT NOT NULL,
      tipo TEXT NOT NULL
    );
  `);

  console.log('✅ Banco de dados criado com sucesso!');
  await db.close();
}

init().catch((err) => {
  console.error('Erro ao criar banco de dados:', err);
});
