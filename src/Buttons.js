import React from 'react';

class Buttons extends React.Component {
  render() {
    const { types } = this.props
    return (
      <div className="classbuttons">
        {types.map(type => <button key={type} className={type} onClick={this.props.function} >{type}</button>)}
      </div>
    );
  }
}

export default Buttons;
