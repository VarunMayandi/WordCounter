
import React from 'react';
import WordCounter from './WordCounter.js';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Responsive Word Counter</h1>
      </header>
      <section className="App-content">
        <WordCounter />
      </section>
    </div>
  );
}

export default App;
