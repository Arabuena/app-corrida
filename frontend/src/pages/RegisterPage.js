import React, { useState } from 'react';
import './RegisterPage.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
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
        <button type="submit" className="register-button">Cadastrar</button>
      </form>
      <a href="/login" className="register-link">Já tem uma conta? Faça login</a>
    </div>
  );
};

export default RegisterPage;
