// backend/config/db.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve corretamente o diretório atual em ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Abre a conexão com o banco de dados SQLite
const dbPromise = open({
  filename: path.resolve(__dirname, '../database/biostock.db'),
  driver: sqlite3.Database,
});

// Exporta o banco para uso nos controllers
export default await dbPromise;
