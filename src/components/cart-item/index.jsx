import { Button, Input } from '../../ui';
import { deleteProductFromCart, updateProductQuantity } from '../../store/action';

import Block from './cart-item.styled';
import { MAX_PRODUCT_QUANTITY } from '../../const';
import { NameSpace } from '../../store/root-reducer';
import { ProductDetails } from '..';
import React from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  onQuantityUpdate(productId, quantity) {
    dispatch(updateProductQuantity(productId, quantity));
  },
  onProductDelete(productId) {
    dispatch(deleteProductFromCart(productId));
  }
});

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      quantity: JSON.parse(localStorage.getItem('state'))[NameSpace.UserProcess].productsInCart.find((item) => item.id === this.props.product.id).quantity,
    };
    this.increaseImageIndex = this.increaseImageIndex.bind(this);
    this.decreaseImageIndex = this.decreaseImageIndex.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.updateProductQuantity = this.updateProductQuantity.bind(this);
  }

  decreaseImageIndex() {
    let prevIndex;

    if(this.state.currentImageIndex > 0) {
      prevIndex = this.state.currentImageIndex - 1;
    } else {
      prevIndex = this.props.product.gallery.length - 1
    }
    
    this.setState({currentImageIndex: prevIndex});
  }

  increaseImageIndex() {
    let nextIndex;

    if(this.state.currentImageIndex < this.props.product.gallery.length - 1) {
      nextIndex = this.state.currentImageIndex + 1;
    } else {
      nextIndex = 0
    }
    
    this.setState({currentImageIndex: nextIndex});
  }

  decreaseQuantity() {
    const newValue = this.state.quantity - 1;

    if(newValue < 1) {
      this.props.onProductDelete(this.props.product.id)
      window.location.reload();
    } else {
      this.setState({quantity: newValue});
      this.updateProductQuantity(newValue);
    }
  }

  increaseQuantity() {
    const newValue = this.state.quantity + 1;
    
    if(newValue > MAX_PRODUCT_QUANTITY) {
      this.setState({quantity: MAX_PRODUCT_QUANTITY});
    } else {
      this.setState({quantity: newValue});
      this.updateProductQuantity(newValue);
    }
  }

  updateProductQuantity(quantity) {
    this.props.onQuantityUpdate(this.props.product.id, quantity)
  }
  
  render() {
    const product = this.props.product;

    return (
      <Block>
        <ProductDetails product={product} $styleType='cart-page' />
        <Block.QuantityWrapper>
          <Button $styleType='quantity' $isPlus onClick={this.increaseQuantity} />
          <Input value={this.state.quantity} />
          <Button $styleType='quantity' onClick={this.decreaseQuantity} />
        </Block.QuantityWrapper>
        <Block.ImageWrapper>
          <Block.Image src={product.gallery[this.state.currentImageIndex]} alt={product.name} width="200" height="288" />
          {product.gallery.length > 1 && 
            <>
              <Button $styleType='arrow' $isPrev onClick={this.decreaseImageIndex}/>
              <Button $styleType='arrow' onClick={this.increaseImageIndex}/>
            </>
          }
        </Block.ImageWrapper>
      </Block>
    )
  }
}

export default connect(null, mapDispatchToProps)(CartItem);