import React from 'react';

import './styles.css';

import Label from '../Label';

export default function Card() {
  return (
    <div className="card-container">
      <header>
        <Label color="#7159c1" /> 
      </header>
      <p>Fazer a migração completa de seu servidor</p>
      <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="Perfil"/>
    </div>
  );
}
