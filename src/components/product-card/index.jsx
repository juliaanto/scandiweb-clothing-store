import Block from './product-card.styled';
import { Button } from '../../ui';
import React from 'react';

class ProductCard extends React.Component {
  render() {
    const product = this.props.product;
    
    return (
      <Block $isInStock={product.inStock}>
        <Block.Wrapper $isInStock={product.inStock}>
          <Block.Image src={product.gallery[0]} alt={product.name} width="354" height="330" />
          <Block.Title $isInStock={product.inStock}>{product.brand} {product.name}</Block.Title>
          <Block.Price $isInStock={product.inStock}>$50.00</Block.Price>
        </Block.Wrapper>
        <Button $styleType="add-to-cart"/>
      </Block>
    )
  }
}

export default ProductCard;