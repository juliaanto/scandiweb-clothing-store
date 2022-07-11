import Block from './product-details.styled';
import { Radio } from '../../ui';
import React from 'react';

class ProductDetails extends React.Component {
  render() {
    return (
      <Block>
        <Block.Brand>{this.props.product?.brand}</Block.Brand>
        <Block.Name>{this.props.product?.name}</Block.Name>
        <Block.Attributes>
          {this.props.product?.attributes.map((item) => (
            <Block.Attribute key={item.id}>
              <Block.Title>{item.name}:</Block.Title>
              <Radio attributeType={item.type} attributeName={item.name} attributes={item.items} />
            </Block.Attribute>
          ))}
        </Block.Attributes>
        <Block.Title>Price:</Block.Title>
        <Block.Price>$50.00</Block.Price>
      </Block>
    )
  }
}

export default ProductDetails;