import Block from './product-card.styled';
import React from 'react';

class ProductCard extends React.Component {
  render() {
    const product = this.props.product;
    
    return (
      <Block>
        <Block.Image src={product.gallery[0]} alt={product.name} width="354" height="330" />
        <Block.Title>{product.brand} {product.name}</Block.Title>
        <Block.Price>$50.00</Block.Price>
      </Block>
    )
  }
}

export default ProductCard;