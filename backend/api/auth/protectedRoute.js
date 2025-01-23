const jwt = require('jsonwebtoken');

// Middleware para verificar o token JWT
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer <token>
  
  if (!token) {
    return res.status(403).json({ message: 'Acesso negado' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Adiciona os dados do usuário ao request
    next(); // Chama o próximo middleware ou a função de rota
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido ou expirado' });
  }
};

// Exemplo de rota protegida
app.get('/api/auth/protectedRoute', verifyToken, (req, res) => {
  res.json({ message: 'Acesso permitido!', user: req.user });
});
