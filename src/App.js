import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import types from './types';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Info from './Info'
import About from './About';
import NotFound from './NotFound';
import Favorites from './Favorites';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <img src="https://cdn2.bulbagarden.net/upload/thumb/4/4b/Pok%C3%A9dex_logo.png/250px-Pok%C3%A9dex_logo.png" alt="pokedex" />
        <div className="nav-links">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/About">About</Link>
          <Link className="link" to="/Favorites">Favorites</Link>
        </div>
        <Switch>
        <Route exact path="/" render={() => <Pokedex pokemons={pokemons} types={types}/>} />
        <Route path="/Pokemon/:id" render={(props) => <Info { ...props } pokemons={pokemons}/>} />
        <Route path="/About" render={() => <About />} />
        <Route path="/Favorites" render={() => <Favorites pokemons={pokemons}/>} />
        <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;