import { AppRoute } from '../../const';
import Block from './cart-overlay.styled';
import { Button } from '../../ui';
import { CartList } from '../../components';
import { NameSpace } from '../../store/root-reducer';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { productsInCart, quantityInCart } = state[NameSpace.UserProcess];
  return { productsInCart, quantityInCart }
}

class CartOverlay extends React.Component {
  render() {
    return (
      <Block id='cart-overlay'>
        <Block.TitleWrapper>
          <Block.Title>My Bag,</Block.Title>
          <Block.Text>&nbsp;{this.props.quantityInCart} items</Block.Text>
        </Block.TitleWrapper>
        <CartList $isCartOverlay />
        <Block.ButtonsWrapper>
          <Block.Link to={AppRoute.Cart}>View bag</Block.Link>
          <Button $isCartOverlay>Check out</Button>
        </Block.ButtonsWrapper>
      </Block>
    )
  }
}

export default connect(mapStateToProps)(CartOverlay);