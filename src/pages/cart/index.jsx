import Block from './cart.styled';
import { NameSpace } from '../../store/root-reducer';
import Page from '../../layout/page';
import { ProductDetails } from '../../components';
import React from 'react';

class Cart extends React.Component {
  render() {
    const productsInCart = JSON.parse(localStorage.getItem('state'))[NameSpace.UserProcess].productsInCart;
    
    return (
      <Page>
        <Block.Title>Cart</Block.Title>
        {productsInCart.map((product) => (
          <ProductDetails product={product} key={product.id}/>
        ))}
      </Page>
    )
  }
}

export default Cart;