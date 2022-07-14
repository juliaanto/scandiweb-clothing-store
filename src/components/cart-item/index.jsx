import Block from './cart-item.styled';
import { ProductDetails } from '..';
import React from 'react';

class CartItem extends React.Component {
  render() {
    return (
      <Block>
        <ProductDetails product={this.props.product} $styleType='cart-page' />
      </Block>
    )
  }
}

export default CartItem;