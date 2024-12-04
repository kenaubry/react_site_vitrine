import React from 'react';
import Header from './components/Header';
import Presentation from './components/sections/Presentation';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Presentation />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
