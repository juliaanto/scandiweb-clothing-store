import Block from './cart.styled';
import { CartItem } from '../../components';
import { Message } from '../../const';
import { NameSpace } from '../../store/root-reducer';
import Page from '../../layout/page';
import React from 'react';

class Cart extends React.Component {
  render() {
    const productsInCart = JSON.parse(localStorage.getItem('state'))[NameSpace.UserProcess].productsInCart;
    
    return (
      <Page>
        <Block.Title>Cart</Block.Title>
        {productsInCart.length > 0 ?
          <Block.ProductList>
          {productsInCart.map((product) => (
            <CartItem product={product} key={product.id}/>
          ))}
        </Block.ProductList>
        :
        <Block.Text>{Message.EmptyCart}</Block.Text>
        }
      </Page>
    )
  }
}

export default Cart;