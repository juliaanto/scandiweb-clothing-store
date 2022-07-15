import Block from './cart.styled';
import { CartItem } from '../../components';
import { Message } from '../../const';
import { NameSpace } from '../../store/root-reducer';
import Page from '../../layout/page';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { productsInCart } = state[NameSpace.UserProcess];
  return { productsInCart }
}

class Cart extends React.Component {
  render() {
    const productsInCart = this.props.productsInCart;
    
    return (
      <Page>
        <Block.Title>Cart</Block.Title>
        {productsInCart.length > 0 ?
          <Block.ProductList>
          {productsInCart.map((product, index) => (
            <CartItem product={product} key={index}/>
          ))}
        </Block.ProductList>
        :
        <Block.Text>{Message.EmptyCart}</Block.Text>
        }
      </Page>
    )
  }
}

export default connect(mapStateToProps)(Cart);