/*server.js*/

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Importando rotas
const authRoutes = require('./routes/authRoutes');
const rideRoutes = require('./routes/rideRoutes');  // Rota de corridas

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Para permitir o uso de JSON nas requisições

// Rotas
app.use('/api/auth', authRoutes);      // Rota de autenticação (Login, Cadastro)
app.use('/api/rides', rideRoutes);     // Rota para corridas

// Função assíncrona para conectar ao banco de dados MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Conectado ao MongoDB com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error.message);
    process.exit(1); // Encerra a aplicação em caso de falha na conexão
  }
};

// Iniciar conexão com o banco de dados
connectDB();

// Definição da porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
