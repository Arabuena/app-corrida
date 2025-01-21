import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1 className="highlight-text">Bem-vindo ao App de Corrida</h1>
      <img src="/assets/favicon.ico" alt="Logo do App de Corrida" className="favicon" />
      <p className="highlight-text">Prepare-se para uma experiência incrível!</p>
    </div>
  );
};

export default HomePage;
