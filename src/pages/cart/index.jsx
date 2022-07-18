import Block from './cart.styled';
import { CartList } from '../../components';
import Page from '../../layout/page';
import React from 'react';

class Cart extends React.Component {
  render() {
    document.title = 'Cart';
    
    return (
      <Page>
        <Block.Title>Cart</Block.Title>
        <CartList />
      </Page>
    )
  }
}

export default Cart;