/*db.js*/
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Substitua com sua string de conexão do MongoDB Atlas
    const conn = await mongoose.connect('mongodb+srv://arah:<101520_Sos>@cluster0.ttyhv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
