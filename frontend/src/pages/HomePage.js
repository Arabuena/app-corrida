import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register'); // Redireciona para a página de cadastro
  };

  return (
    <div className="homepage">
      <h1 className="highlight-text">Bem-vindo ao App de Corrida</h1>
      <img src="/assets/favicon.ico" alt="Logo do App de Corrida" className="favicon" />
      <p className="highlight-text">Prepare-se para uma experiência incrível!</p>

      <div className="auth-buttons">
        <p className="highlight-text">Ainda não tem uma conta?</p>
        <button onClick={handleRegisterClick} className="register-button">
          Cadastre-se agora
        </button>
      </div>
    </div>
  );
};

export default HomePage;
