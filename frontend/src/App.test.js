import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <h2>Bem-vindo ao app-corrida</h2>
                <Button label="Clique aqui!" />
            </main>
            <Footer />
        </div>
    );
}

export default App;
