import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const opac = this.props.opacity;
    return (
      <div className="color-box" style={{opacity: opac}}>
        {opac >= 0.2 ? <ColorBox opacity={opac - 0.1} /> : null}
      </div>
    )
  }
  
}
