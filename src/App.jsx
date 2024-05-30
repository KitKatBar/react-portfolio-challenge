import './App.css';
import React, { useState } from 'react';
import Header  from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Page from './components/Page';
import background from './assets/background/hu-tao-genshin-impact-4k-desktop-wallpaperwaifu-com.mp4';

function App() {
  const [pages] = useState([
    { page: "AboutMe" },
    { page: "Portfolio" },
    { page: "Contact" },
    { page: "Resume" }
  ]);

  const [current, setCurrent] = useState(pages[0]);
  
  return (
    <div className="App">
      <Header>
        <Nav pages={pages} current={current} setCurrent={setCurrent} />
      </Header>
      <main className="App-header">
        <section className="container">
          <div className="overlay"></div>
          <video src={background} autoPlay loop muted />
          <Page current={current} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
