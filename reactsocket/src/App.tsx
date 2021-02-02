import React from 'react';
import './App.css';
import ClientSocket from './components/clientSocket';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClientSocket />
      </header>
    </div>
  );
}

export default App;
