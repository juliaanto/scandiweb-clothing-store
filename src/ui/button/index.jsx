import { ReactComponent as IconCart } from '../../assets/cart.svg';
import React from 'react';
import StyledButton from './button.styled';

class Button extends React.Component {
  constructor({$styleType, $isCurrencyOpen}) {
    super();
    this.styleType = $styleType;
    this.isCurrencyOpen = $isCurrencyOpen;
  }

  render() {
    return (
      <StyledButton $styleType={this.styleType} $isCurrencyOpen={this.isCurrencyOpen}>
        {this.styleType === 'currency' && '$'}
        {this.styleType === 'cart' && <IconCart />}
      </StyledButton>
    )
  }
}

export default Button;