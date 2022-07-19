import { AppRoute } from '../../const';
import Block from './cart-overlay.styled';
import { Button } from '../../ui';
import { CartList } from '../../components';
import { NameSpace } from '../../store/root-reducer';
import React from 'react';
import { connect } from 'react-redux';
import { getTotalPrice } from '../../utils/price';

const mapStateToProps = (state) => {
  const { productsInCart, quantityInCart } = state[NameSpace.UserProcess];
  const { currentCurrency } = state[NameSpace.ShopData];
  return { productsInCart, quantityInCart, currentCurrency }
}

class CartOverlay extends React.Component {
  handleLinkToCartClick() {
    window.location.pathname === AppRoute.Cart && this.props.handleClose();
  };
  
  render() {
    const totalPrice = getTotalPrice(this.props.productsInCart, this.props.currentCurrency);
    
    return (
      <Block id='cart-overlay'>
        <Block.TitleWrapper>
          <Block.Text $weight={700}>My Bag,</Block.Text>
          <Block.Text $weight={500}>&nbsp;{this.props.quantityInCart} items</Block.Text>
        </Block.TitleWrapper>
        <CartList $isCartOverlay />
        <Block.TotalPriceWrapper>
          <Block.Text $weight={700}>Total</Block.Text>
          <Block.Text $weight={700}>{this.props.currentCurrency.symbol}{totalPrice}</Block.Text>
        </Block.TotalPriceWrapper>
        <Block.ButtonsWrapper>
          <Block.Link to={AppRoute.Cart} onClick={this.handleLinkToCartClick}>View bag</Block.Link>
          <Button $isCartOverlay>Check out</Button>
        </Block.ButtonsWrapper>
      </Block>
    )
  }
}

export default connect(mapStateToProps)(CartOverlay);