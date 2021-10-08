import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image, id } = this.props.pokemon;

        return (
            <div className="pokemon">
                <div>
                    <p className="pkm-id">{`#${id}`}</p>
                    <p> {name} </p>
                    <p> {type} </p>
                    <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                </div>
                <img src={image} alt={`${name} sprite`} />
            </div>
        );
    }
}

export default Pokemon;