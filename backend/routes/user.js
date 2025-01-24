// routes/users.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Rota para criar um usuário
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar usuário' });
  }
});

module.exports = router;
