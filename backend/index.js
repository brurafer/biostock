import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './models/index.js'; // ou: import * as db from './models/index.js'

import insumoRoutes from './routes/insumo.routes.js';
import setorRoutes from './routes/setor.routes.js';
import solicitacaoRoutes from './routes/solicitacao.routes.js';
import notificationRoutes from './routes/notification.routes.js';
import loginRoutes from './routes/login.routes.js'; // login
// import { autenticar } from './middleware/auth.js'; // se quiser proteger rotas

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/insumos', insumoRoutes);
app.use('/api/setores', setorRoutes);
app.use('/api/solicitacoes', solicitacaoRoutes);
app.use('/api/notificacoes', notificationRoutes); // ou com autenticação
app.use('/api/login', loginRoutes); // login

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
