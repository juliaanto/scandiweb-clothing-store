import Block from './product-details.styled';
import { NameSpace } from '../../store/root-reducer';
import { Radio } from '../../ui';
import React from 'react';
import { connect } from 'react-redux';
import { getPrice } from '../../utils/price';

const mapStateToProps = (state) => {
  const { currentCurrency } = state[NameSpace.ShopData];
  return { currentCurrency }
}

class ProductDetails extends React.Component {
  render() {
    const price = getPrice(this.props.product?.prices, this.props.currentCurrency);
    
    return (
      <Block>
        <Block.Brand>{this.props.product?.brand}</Block.Brand>
        <Block.Name>{this.props.product?.name}</Block.Name>
        <Block.Attributes>
          {this.props.product?.attributes.map((item) => (
            <Block.Attribute key={item.id}>
              <Block.Title>{item.name}:</Block.Title>
              <Radio attribute={item} />
            </Block.Attribute>
          ))}
        </Block.Attributes>
        <Block.Title>Price:</Block.Title>
        <Block.Price>{price?.currency.symbol}{price?.amount}</Block.Price>
      </Block>
    )
  }
}

export default connect(mapStateToProps)(ProductDetails);