import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image, id, moreInfo } = this.props.pokemon;

        return (
            <div className="pokemon">
                <div>
                    <p className="pkm-id">{`#${id}`}</p>
                    <p> {name} </p>
                    <p> {type} </p>
                    <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                </div>
                <a href={moreInfo} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt={`${name} sprite`} />
                </a>
            </div>
        );
    }
}

export default Pokemon;