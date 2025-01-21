import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userCredentials = { email, password };
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCredentials),
      });

      const data = await response.json();

      if (response.ok) {
        // Salvar o token no localStorage ou contexto de autenticação
        localStorage.setItem('token', data.token);
        // Redirecionar para a página inicial ou dashboard
        window.location.href = '/home';
      } else {
        setError(data.message || 'Erro ao fazer login');
      }
    } catch (err) {
      setError('Erro de conexão');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
