import React from 'react';

class Buttons extends React.Component {
  render() {
    const { types } = this.props
    return (
      <div className="classbuttons">
        {types.map(type => <button className={type} onClick={this.selectType} >{type}</button>)}
      </div>
    );
  }
}

export default Buttons;
