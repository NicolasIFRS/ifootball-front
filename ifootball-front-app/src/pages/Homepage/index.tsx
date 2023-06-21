import './style.scss';
import React, { useState } from 'react';









function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='container'>
      <header>
        <div className='logo'>
            <h1>IFootball</h1>
        </div>
      </header>
      <div className="box">
        <div className="info-box">
          <h2>CRIAÇÃO DE TIMES FECHA EM</h2>
          <p>Data e Hora: {new Date().toLocaleString()}</p>
        </div>
      </div>
      <div className='team-boss-class'>
      <div className="team-block">
        <h2>Dados do Time</h2>
        <p>Nome do Time</p>
        <p>Pontuação: 100</p>
        <button onClick={() => window.location.href = 'outra_pagina.html'}>Ir para outra página</button>
      </div>
      </div>




      <div className="menu">

          <button onClick={toggleMenu}>Abrir Menu</button>
        </div>
        {menuOpen && (
          <div className="menu-responsive">
            <button onClick={toggleMenu}>Fechar Menu</button>
            {<li>PAU</li>/* Aqui você pode adicionar os itens do menu */}
          </div>
        )}
    </div>

  );
}

export default Homepage;