import { getTax, getTotalPrice } from '../../utils/price';

import Block from './cart.styled';
import { Button } from '../../ui';
import { CartList } from '../../components';
import { NameSpace } from '../../store/root-reducer';
import Page from '../../layout/page';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { productsInCart, quantityInCart } = state[NameSpace.UserProcess];
  const { currentCurrency } = state[NameSpace.ShopData];
  return { productsInCart, currentCurrency, quantityInCart }
}

class Cart extends React.Component {
  render() {
    document.title = 'Cart';

    const totalPrice = getTotalPrice(this.props.productsInCart, this.props.currentCurrency);
    const tax = getTax(totalPrice);
    
    return (
      <Page>
        <Block.Title>Cart</Block.Title>
        <CartList />
        <Block.Total>
          <Block.Text $weight={400}>Tax 21%:</Block.Text>
          <Block.Text $weight={700}>{this.props.currentCurrency.symbol}{tax}</Block.Text>
          <Block.Text $weight={400}>Quantity:</Block.Text>
          <Block.Text $weight={700}>{this.props.quantityInCart}</Block.Text>
          <Block.Text $weight={500}>Total:</Block.Text>
          <Block.Text $weight={700}>{this.props.currentCurrency.symbol}{totalPrice}</Block.Text>
        </Block.Total>
        <Block.ButtonWrapper>
            <Button $isCartPage disabled={!this.props.quantityInCart > 0}>Order</Button>
          </Block.ButtonWrapper>
      </Page>
    )
  }
}

export default connect(mapStateToProps)(Cart);