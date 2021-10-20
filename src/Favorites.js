import React from 'react';
import Pokemon from './Pokemon';

class Favorites extends React.Component {
  readFavoritePokemonIds = () => (
    JSON.parse(localStorage.getItem('favoritePokemonIds')) || []
  );

  isEmpty = () => (
    this.readFavoritePokemonIds().length === 0 ? true : false
  )

  render() {
    const { pokemons } = this.props;
    return (
      <div>
        <h2>Favorite Pokemons:</h2>
        <div className="pokemon">
          {this.isEmpty() && <span>You didn't choose any favorite pokemon!</span>}
          {pokemons.filter((pokemon) => this.readFavoritePokemonIds().includes(pokemon.id)).map((filteredPokemon) => {
            return ( 
              <Pokemon pokemon={filteredPokemon} className="pokemon"/>
            )
          })}
        </div> 
      </div>
    );
  }
}

export default Favorites;
