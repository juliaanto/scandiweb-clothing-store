import { Button } from '../../ui';
import CartOverlay from '../cart-overlay';
import { NameSpace } from '../../store/root-reducer';
import Overlay from '../overlay';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { quantityInCart } = state[NameSpace.UserProcess];
  return { quantityInCart }
}

class CartButton extends React.Component {
  constructor() {
    super();
    this.state = {
      isCartOverlayOpen: false 
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    document.body.style.overflow = this.state.isCartOverlayOpen ? 'hidden' : 'auto';
  }
 
  handleClick() {
    this.setState(prevState => ({
      isCartOverlayOpen: !prevState.isCartOverlayOpen
    }));
  }

  getProductQuantity(productsInCart) {
    let quantity = 0;

    productsInCart.map((item) => (
      quantity += item.quantity
    ))
    
    return quantity;
  }
  
  render() {

    
    return (
      <>
        <Overlay isOpen={this.state.isCartOverlayOpen} handleClose={() => this.setState({isCartOverlayOpen: false})} buttonId="#cart" $isCartOverlay>
          <CartOverlay />
        </Overlay>
        <Button 
          $styleType='cart' 
          productQuantity={this.props.quantityInCart}
          onClick={this.handleClick}
        />
      </>
    )
  }
}

export default connect(mapStateToProps)(CartButton);