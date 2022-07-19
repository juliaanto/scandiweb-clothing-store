import Block from './input.styled';
import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <Block 
        type='number' 
        id={this.props.id}
        name='quantity' 
        min='1' 
        max='99'
        value={this.props.value}
        readOnly
        disabled
        $isCartOverlay={this.props.$isCartOverlay}
      />
    )
  }
}

export default Input;