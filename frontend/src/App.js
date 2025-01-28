import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Para navegação
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './pages/login';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/register';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
