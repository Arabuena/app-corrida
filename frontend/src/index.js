import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Estilos globais
import App from './App';
import reportWebVitals from './reportWebVitals';

// Criação do root e renderização do App dentro do elemento 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Medindo o desempenho (opcional)
reportWebVitals();
