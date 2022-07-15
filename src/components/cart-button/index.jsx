import { Button } from '../../ui';
import { NameSpace } from '../../store/root-reducer';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { quantityInCart } = state[NameSpace.UserProcess];
  return { quantityInCart }
}

class CartButton extends React.Component {

  getProductQuantity(productsInCart) {
    let quantity = 0;

    productsInCart.map((item) => (
      quantity += item.quantity
    ))
    
    return quantity;
  }
  
  render() {
    return (
      <Button $styleType='cart' productQuantity={this.props.quantityInCart}/>
    )
  }
}

export default connect(mapStateToProps)(CartButton);