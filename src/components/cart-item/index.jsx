import Block from './cart-item.styled';
import { Button } from '../../ui';
import { ProductDetails } from '..';
import React from 'react';

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImageIndex: 0,
    };
    this.increaseImageIndex = this.increaseImageIndex.bind(this);
    this.decreaseImageIndex = this.decreaseImageIndex.bind(this);
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
  
  render() {
    const product = this.props.product;
    return (
      <Block>
        <ProductDetails product={product} $styleType='cart-page' />
        <Block.Wrapper>
          <Block.Image src={product.gallery[this.state.currentImageIndex]} alt={product.name} width="200" height="288" />
          {product.gallery.length > 1 && 
            <>
              <Button $styleType='arrow' $isPrev onClick={this.decreaseImageIndex}/>
              <Button $styleType='arrow' onClick={this.increaseImageIndex}/>
            </>
          }
        </Block.Wrapper>
      </Block>
    )
  }
}

export default CartItem;