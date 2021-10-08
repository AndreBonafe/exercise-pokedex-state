import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import types from './types';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} types={types} />
    </div>
  );
}

export default App;