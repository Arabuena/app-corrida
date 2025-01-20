import React from 'react';
import './Header.css'; // Estilos específicos para o Header

const Header = () => {
  return (
    <header className="header">
      <h1>App de Corrida</h1>
      <nav>
        <ul>
          <li><a href="/">Início</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
