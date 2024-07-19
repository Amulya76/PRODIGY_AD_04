// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './app'; // Corrected import path

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);
