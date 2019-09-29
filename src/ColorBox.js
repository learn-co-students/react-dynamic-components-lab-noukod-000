import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const newOpacity = this.props.opacity - 0.1;
    if(this.props.opacity >= 0.2){
      return (
        <div>
         <ColorBox opacity = {newOpacity} />
        </div>
      );
    }else
    {
      return null;
    }
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>

      </div>
    )
  }

}
