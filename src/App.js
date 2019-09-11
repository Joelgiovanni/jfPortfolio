import React from 'react';
import 'animate.css/animate.min.css';
import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import Work from './components/layout/Work';
import About from './components/layout/About';
import Contact from './components/layout/Contact';
import Footer from './components/layout/Footer';
import Jumbotron from './components/layout/Jumbotron';

function App() {
  return (
    <div className='App'>
      <div>
        <Header />
        <Nav />
        <About />
        <Jumbotron />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
