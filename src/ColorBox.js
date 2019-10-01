import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const newColor = this.props.opacity;
    return (
      <div className="color-box" style={{opacity: newColor}}>
        {newColor >= 0.2 ? <ColorBox opacity={newColor - 0.1} /> : null}
      </div>
    )
  }
  
}