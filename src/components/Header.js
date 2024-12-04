import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>Association XYZ</h1>
      <nav>
        <a href="#presentation">Présentation</a>
        <a href="#services">Services</a>
        <a href="#about">À propos</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
