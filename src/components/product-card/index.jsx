import {AppLink} from '../../const'
import Block from './product-card.styled';
import { Button } from '../../ui';
import { Link } from 'react-router-dom';
import { NameSpace } from '../../store/root-reducer';
import React from 'react';
import { connect } from 'react-redux';
import { getPrice } from '../../utils/price';

const mapStateToProps = (state) => {
  const { currentCurrency } = state[NameSpace.ShopData];
  return { currentCurrency }
}

class ProductCard extends React.Component {
  render() {
    const product = this.props.product;
    const price = getPrice(this.props.product.prices, this.props.currentCurrency);
    
    return (
      <Block $isInStock={product.inStock}>
        <Link to={AppLink.ProductById(product.id)}>
          <Block.Wrapper $isInStock={product.inStock}>
            <Block.Image src={product.gallery[0]} alt={product.name} width="354" height="330" />
            <Block.Title $isInStock={product.inStock}>{product.brand} {product.name}</Block.Title>
            <Block.Price $isInStock={product.inStock}>{price?.currency.symbol}{price?.amount}</Block.Price>
          </Block.Wrapper>
          <Button $styleType="add-to-cart"/>
        </Link>
      </Block>
    )
  }
}

export default connect(mapStateToProps)(ProductCard);