import Block from './product-card.styled';
import { Button } from '../../ui';
import { NameSpace } from '../../store/root-reducer';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { currentCurrency } = state[NameSpace.ShopData];
  return { currentCurrency }
}

class ProductCard extends React.Component {
  getPrice() {
    return this.props.product.prices.find((price) => price.currency?.label === this.props.currentCurrency?.label);
  }
  
  render() {
    const product = this.props.product;
    
    return (
      <Block $isInStock={product.inStock}>
        <Block.Wrapper $isInStock={product.inStock}>
          <Block.Image src={product.gallery[0]} alt={product.name} width="354" height="330" />
          <Block.Title $isInStock={product.inStock}>{product.brand} {product.name}</Block.Title>
          <Block.Price $isInStock={product.inStock}>{this.getPrice()?.currency.symbol}{this.getPrice()?.amount}</Block.Price>
        </Block.Wrapper>
        <Button $styleType="add-to-cart"/>
      </Block>
    )
  }
}

export default connect(mapStateToProps)(ProductCard);