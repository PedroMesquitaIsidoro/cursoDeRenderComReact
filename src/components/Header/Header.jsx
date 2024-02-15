import React from 'react';
import "./Header.css";
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <div className='header flex flex-col' id="header">
      <Navbar />

      <div className='container flex'>
        <div className='header-content'>
          <h2 className='text-uppercase text-white op-07 fw-6 ls-2'>CURSO DE ENSCAPE PARA SKETCHUP</h2>
          <h1 className='text-white fw-6 header-title'>Desenvolva sua criatividade e <span className='text-orange'>domine o poder do Enscape</span> conosco.</h1>
          <div className='btn-groups flex'>
            <a href="https://pay.hotmart.com/C75234554J?off=4jquvl9c&bid=1708016373370" className='btn-item bg-orange fw-4 ls-2' target="_blank" rel="noopener noreferrer">
              COMPRAR AGORA
            </a>
            <a href="https://www.instagram.com/cursoderender/" className='btn-item bg-dark fw-4 ls-2' target="_blank" rel="noopener noreferrer">
              Contate-me
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
