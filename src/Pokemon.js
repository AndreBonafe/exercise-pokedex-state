import React from 'react';
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
    readFavoritePokemonIds = () => (
        JSON.parse(localStorage.getItem('favoritePokemonIds')) || []
    );

    checkContain = () => {
        return this.readFavoritePokemonIds().some((idpkm) => parseFloat(idpkm) === this.props.pokemon.id);
    }

    render() {
        const { name, type, averageWeight, image, id, moreInfo } = this.props.pokemon;

        return (
            <div className="pokemon">
                <div>
                    {this.checkContain() && <img className="favorite-icon" src="/star-icon.svg" alt="staricon"/>}
                    <p> {name} </p>
                    <p> {type} </p>
                    <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                </div>
                <a href={moreInfo} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt={`${name} sprite`} />
                </a>
                <Link to={`/Pokemon/${id}`} className="more link">More Info</Link>
            </div>
        );
    }
}

export default Pokemon;