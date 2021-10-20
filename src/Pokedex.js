import React from 'react';
import Pokemon from './Pokemon';
import Buttons from './Buttons';

class Pokedex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        pokemonAtual: 0,
        selectedType: 'all',
        buttonDisable: 0,
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

  filterPokemonbyType = () => {
    const { pokemons } = this.props
    if (this.state.selectedType !== 'all') {
      return pokemons.filter(pokemon => pokemon.type === this.state.selectedType)
    } else {
      return pokemons;
    }
  }

  checkLength = () => {
    if (this.filterPokemonbyType().length === 1) {
      this.setState( {
        buttonDisable: 1,
      })
    } else {
      this.setState( {
        buttonDisable: 0,
      })
    }
  }

  selectType = (event) => {
    const type = event.target.className;
    this.setState( {
      pokemonAtual: 0,
      selectedType: type,
    })
  }

  render() {
    return (
      <div onLoad={this.checkLength}>
        <div className="pokedex">
          <Pokemon pokemon={this.filterPokemonbyType()[this.state.pokemonAtual]} />
        </div>
        <div className="buttons">
          <Buttons types={this.props.types} function={this.selectType} />
          <button className="all" onClick={this.selectType}>All</button>
          <button onClick={this.changePokemon} disabled={this.state.buttonDisable}>➜</button>
        </div>
      </div>   
    );
  }
}

export default Pokedex;