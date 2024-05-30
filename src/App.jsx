import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header  from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Header>
        <Nav />
      </Header>
      <main className="App-header">
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
