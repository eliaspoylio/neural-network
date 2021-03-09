import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [sigmoid, setSigmoid] = useState(0);

  useEffect(() => {
    fetch('/sigmoid/9').then(res => res.json()).then(data => {
      setSigmoid(data.sigmoid);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Test sigmoid is {sigmoid}.</p>
      </header>
    </div>
  );
}

export default App;
