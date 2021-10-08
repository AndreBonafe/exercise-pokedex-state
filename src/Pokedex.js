import React from 'react';
import Pokemon from './Pokemon';
import Buttons from './Buttons';

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
          <Buttons types={this.props.types} function={this.selectType} />
          <button className="all" onClick={this.selectType}>All</button>
          <button onClick={this.changePokemon}>➜</button>
        </div>
      </div>   
    );
  }
}

export default Pokedex;