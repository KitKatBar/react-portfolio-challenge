import './App.css';
import React, { useState } from 'react';

// Import the components we need
import Header  from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Page from './components/Page';

// Animated background
import background from './assets/background/hu-tao-genshin-impact-4k-desktop-wallpaperwaifu-com.mp4';

function App() {
  // Define different page states
  const [pages] = useState([
    { page: "AboutMe" },
    { page: "Portfolio" },
    { page: "Contact" },
    { page: "Resume" }
  ]);

  // Use this to change the state of the pages
  const [current, setCurrent] = useState(pages[0]);
  
  return (
    <div className="App">
      {/* This is the header */}
      <Header>
        {/* This is the navbar that can change our page state */}
        <Nav pages={pages} current={current} setCurrent={setCurrent} />
      </Header>
      <main className="App-header">
        <section className="container">
          {/* This is an overlay to adjust the brightness of the animated background */}
          <div className="overlay"></div>
          {/* This is the animated background */}
          <video src={background} autoPlay loop muted />
          {/* These are the page contents that is changed based on the state */}
          <Page current={current} />
        </section>
      </main>
      {/* This is the footer */}
      <Footer />
    </div>
  );
}

export default App;
