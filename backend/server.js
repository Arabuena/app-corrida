const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database'); // Importando a conexão consolidada
require('dotenv').config();

// Importando rotas
const authRoutes = require('./routes/authRoutes');
const rideRoutes = require('./routes/rideRoutes');  // Rota de corridas

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Para permitir o uso de JSON nas requisições

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/rides', rideRoutes);

// Conectar ao banco de dados
connectDB();

// Definição da porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
