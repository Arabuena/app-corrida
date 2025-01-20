import React, { useState } from 'react';
import './LoginPage.css'; // Estilos específicos para a página de login

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de login aqui (exemplo fictício)
    console.log('Logando com:', email, password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>

      <div className="social-login">
        <button>Login com Facebook</button>
        <button>Login com Google</button>
      </div>

      <div className="signup-link">
        <p>Não tem uma conta? <a href="/signup">Criar conta</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
