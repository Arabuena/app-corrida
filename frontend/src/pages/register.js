import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { 
      name: formData.name, 
      email: formData.email, 
      password: formData.password 
    };

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        // Se o cadastro for bem-sucedido, redireciona para a página de login
        navigate('/login'); // Redireciona para a página de login
      } else {
        setError(data.message || 'Erro ao cadastrar');
      }
    } catch (err) {
      setError('Erro de conexão com o servidor');
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Crie sua conta</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Nome Completo" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="E-mail" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Senha" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="register-button">Cadastrar</button>
      </form>
      <a href="/login" className="register-link">Já tem uma conta? Faça login</a>
    </div>
  );
};

export default RegisterPage;
