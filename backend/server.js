const express = require('express');
const connectDB = require('./database');  // Arquivo de conexão do MongoDB

const app = express();
const port = 3000;

// Middleware para analisar corpo de requisições
app.use(express.json());

// Conectar ao MongoDB
connectDB();

// Definir rotas
app.use('/api/auth', require('./routes/users'));

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
