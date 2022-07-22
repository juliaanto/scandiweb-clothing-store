import { Button, Input } from '../../ui';
import { getProduct, getProductQuantity, removeProduct } from '../../utils/cart';
import { updateCartList, updateProductQuantity, updateQuantityInCart } from '../../store/action';

import Block from './cart-item.styled';
import { MAX_PRODUCT_QUANTITY } from '../../const';
import { NameSpace } from '../../store/root-reducer';
import { ProductDetails } from '..';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { productsInCart } = state[NameSpace.UserProcess];
  return { productsInCart }
}

const mapDispatchToProps = (dispatch) => ({
  onQuantityUpdate(productIndex, quantity, quantityInCart) {
    dispatch(updateProductQuantity(productIndex, quantity));
    dispatch(updateQuantityInCart(quantityInCart));
  },
  onProductRemove(productList, quantityInCart) {
    dispatch(updateCartList(productList));
    dispatch(updateQuantityInCart(quantityInCart));
  }
});

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      quantity: getProduct(JSON.parse(localStorage.getItem('state'))[NameSpace.UserProcess].productsInCart, this.props.product).quantity,
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
      const newValueItemsInCart = getProductQuantity() - 1;
      const removedProduct = {...this.props.product};
      const updatedProductList = removeProduct(this.props.productsInCart, removedProduct);
      this.props.onProductRemove(updatedProductList, newValueItemsInCart)
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
    const newValueItemsInCart = getProductQuantity() + quantity - this.state.quantity;
    this.props.onQuantityUpdate(this.props.productsInCart.indexOf(getProduct(this.props.productsInCart, this.props.product)), quantity, newValueItemsInCart)
  }
  
  render() {
    const product = this.props.product;

    return (
      <Block $isCartOverlay={this.props.$isCartOverlay}>
        <ProductDetails product={product} $styleType='cart-page' $isCartOverlay={this.props.$isCartOverlay} $productIndex={this.props.productsInCart.indexOf(product)} />
        <Block.QuantityWrapper $isCartOverlay={this.props.$isCartOverlay}>
          <Button $styleType='quantity' $isPlus onClick={this.increaseQuantity} $isCartOverlay={this.props.$isCartOverlay} />
          <Input value={this.state.quantity} $isCartOverlay={this.props.$isCartOverlay} id={`quantity-input-${product.id}-${this.props.$isCartOverlay}`}/>
          <Button $styleType='quantity' onClick={this.decreaseQuantity} $isCartOverlay={this.props.$isCartOverlay} />
        </Block.QuantityWrapper>
        <Block.ImageWrapper $isCartOverlay={this.props.$isCartOverlay}>
          <Block.Image src={product.gallery[this.state.currentImageIndex]} alt={product.name} width={this.props.$isCartOverlay ? '121' : '200'} height={this.props.$isCartOverlay ? '190' : '288'} />
          {(!this.props.$isCartOverlay && product.gallery.length > 1) && 
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

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);