import { getProductQuantity, updateProductList } from '../../utils/cart';
import { updateCartList, updateQuantityInCart } from '../../store/action';

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
  const { productsInCart } = state[NameSpace.UserProcess];
  return { currentCurrency, productsInCart }
}

const mapDispatchToProps = (dispatch) => ({
  onProductAdd(productList) {
    dispatch(updateCartList(productList));
    dispatch(updateQuantityInCart(getProductQuantity()));
  },
});

class ProductCard extends React.Component {
  handleAddToCartClick() {
    const addedProduct = {...this.props.product};
    const updatedProductList = updateProductList(this.props.productsInCart, addedProduct);
    this.props.onProductAdd(updatedProductList);
  }
  
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
          {this.props.product.attributes.length > 0 &&
            <Button $styleType="add-to-cart" />
          }
        </Link>
        {this.props.product.attributes.length <= 0 &&
          <Button $styleType="add-to-cart" onClick={() => this.handleAddToCartClick()}/>
        }
      </Block>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);