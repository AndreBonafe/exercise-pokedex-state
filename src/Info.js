import React from 'react';
import './info.css'

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fav: false,
    }
  }

  pokemonFind = () => {
    const { pokemons, match } = this.props;
    const id = parseFloat(match.params.id);

    return pokemons.find((pokemon) => pokemon.id === id);
  }

  readFavoritePokemonIds = () => (
    JSON.parse(localStorage.getItem('favoritePokemonIds')) || []
  );
  
  storeFavPokemon = (pokemons) => {
    localStorage.setItem('favoritePokemonIds', JSON.stringify(pokemons))
  }

  addFavPokemon = (id) => {
    const favoritePokemons = this.readFavoritePokemonIds();
    const newFavoritePokemons = [...favoritePokemons, id];

    this.storeFavPokemon(newFavoritePokemons);
  }

  removeFavPokemon = (id) => {
    const favoritePokemons = this.readFavoritePokemonIds();
    const newFavoritePokemons = favoritePokemons.filter((pkmid) => pkmid !== id);

    this.storeFavPokemon(newFavoritePokemons);
  }
  
  handleChange = () => {
  const id = this.pokemonFind().id;
  this.checkContain() ? this.removeFavPokemon(id) : this.addFavPokemon(id);
  this.forceUpdate();
  }

  checkContain = () => {
    return this.readFavoritePokemonIds().some((id) => parseFloat(id) === this.pokemonFind().id);
  }

  render() {
    return (
      <div className="infos">
        <h2>{this.pokemonFind().name}</h2>
        {this.checkContain() && <img className="favorite-icon" src="/star-icon.svg" alt="staricon"/>}
        <img src={this.pokemonFind().image} alt={this.pokemonFind().name} />
        <div className="about-type">
          <div className="Type-pkm">
            <h3>Type:</h3>
            <p>{this.pokemonFind().type}</p>
          </div>
          <div className="Weight-pkm">
            <h3>Weight:</h3>
            <p>{`${this.pokemonFind().averageWeight.value} ${this.pokemonFind().averageWeight.measurementUnit}`}</p>
          </div>
        </div>
        <div className="About-pkm">
          <h3>About:</h3>
          <p className="About-p">{this.pokemonFind().about}</p>
        </div>
        <label htmlFor="fav">
          Save as Favorite:
          <input type="Checkbox" name="fav" checked={this.checkContain()} onClick={this.handleChange}/>
        </label>
        {/* <h3>Find At:</h3>
        {this.pokemonFind().foundAt.map((location) => {
          return <div key={location.location}>
                   <p>{location.location}</p>
                   <img src={location.map} alt={location.location} />
                 </div>
        })} */}
      </div>
    )
  }   
}

export default Info;
