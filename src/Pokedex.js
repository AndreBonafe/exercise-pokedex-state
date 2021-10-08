import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super()
    this.state = {
        pokemonAtual: 0,
        selectedType: 'all',
    }
  }

  changePokemon = () => {
    if (this.state.pokemonAtual < this.filterPokemonbyType().length - 1) {
      return this.setState((estadoAnterior, _props) => ({
        pokemonAtual: estadoAnterior.pokemonAtual + 1
      }))
    }
    this.setState( {
      pokemonAtual: 0
    })
  }

  selectType = (event) => {
    console.log(this.state.selectedType)
    const type = event.target.className;
    if (type !== this.state.selectedType) {
      return this.setState( {
        pokemonAtual: 0,
        selectedType: type,
      })
    }
    this.setState( {
      selectedType: 'all',
    })
  }

  filterPokemonbyType = () => {
    const { pokemons } = this.props
    if (this.state.selectedType !== 'all') {
      return pokemons.filter(pokemon => pokemon.type === this.state.selectedType)
    } else {
      return pokemons;
    }
  }

  render() {
    const { pokemons } = this.props;
    return (
      <div>
        <div className="pokedex">
          <Pokemon key={pokemons.id} pokemon={this.filterPokemonbyType()[this.state.pokemonAtual]} />
        </div>
        <div className="buttons">
          <button className="Fire" onClick={this.selectType}>Fire</button>
          <button className="Electric" onClick={this.selectType}>Electric</button>
          <button className="Normal" onClick={this.selectType}>Normal</button>
          <button className="Fighting" onClick={this.selectType}>Fighting</button>
          <button className="Flying" onClick={this.selectType}>Flying</button>
          <button className="Poison" onClick={this.selectType}>Poison</button>
          <button className="Ground" onClick={this.selectType}>Ground</button>
          <button className="Rock" onClick={this.selectType}>Rock</button>
          <button className="Bug" onClick={this.selectType}>Bug</button>
          <button className="Ghost" onClick={this.selectType}>Ghost</button>
          <button className="Water" onClick={this.selectType}>Water</button>
          <button className="Grass" onClick={this.selectType}>Grass</button>
          <button className="Psychic" onClick={this.selectType}>Psychic</button>
          <button className="Dragon" onClick={this.selectType}>Dragon</button>
          <button className="Dark" onClick={this.selectType}>Dark</button>
          <br />
          <button className="all" onClick={this.selectType}>All</button>
          <button onClick={this.changePokemon}>➜</button>
        </div>
      </div>   
    );
  }
}

export default Pokedex;