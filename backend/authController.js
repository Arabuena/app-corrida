const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Supondo que você tenha um modelo de usuário no banco de dados

// Função para login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar o usuário pelo email
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ message: 'Usuário não encontrado' });
    }

    // Verificar a senha
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Senha incorreta' });
    }

    // Gerar o token JWT
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // O token expira em 1 hora
    );

    // Retornar o token
    res.status(200).json({ token });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro no servidor' });
  }
};

module.exports = { login };
