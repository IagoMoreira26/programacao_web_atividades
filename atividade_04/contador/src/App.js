import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'; // Importe o componente Counter

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <Counter /> {/* Adicione o componente Counter aqui */}
      </header>
    </div>
  );
}

export default App;