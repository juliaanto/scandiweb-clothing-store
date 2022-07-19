import Block from './cart-list.styled';
import CartItem from '../cart-item';
import { Message } from '../../const';
import { NameSpace } from '../../store/root-reducer';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { productsInCart } = state[NameSpace.UserProcess];
  return { productsInCart }
}

class CartList extends React.Component {
  render() {
    const productsInCart = this.props.productsInCart;

    return (
      productsInCart.length > 0 ?
      <Block $isCartOverlay={this.props.$isCartOverlay}>
        {productsInCart.map((product, index) => (
          <CartItem product={product} key={index} $isCartOverlay={this.props.$isCartOverlay}/>
        ))}
      </Block>
      :
      <Block.Text $isCartOverlay={this.props.$isCartOverlay}>{Message.EmptyCart}</Block.Text>
    )
  }
}

export default connect(mapStateToProps)(CartList);