require('dotenv').config();

const mongoose = require('mongoose');

// Pegando a URI do banco de dados do .env
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.error('Erro: A variável de ambiente MONGO_URI não está definida.');
  process.exit(1);
}

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado com sucesso!'))
.catch((err) => console.error('Erro ao conectar com o MongoDB:', err));
