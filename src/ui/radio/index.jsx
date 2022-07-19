import Block from './radio.styled';
import React from 'react';

class Radio extends React.Component {
  render() {
    const attribute = this.props.attribute;
    
    return (
      <Block $attributeType={attribute.type} $isCartOverlay={this.props.$isCartOverlay}>
        {attribute.items?.map((item) => (
          <Block.Value 
            key={item.displayValue}
            $attributeType={attribute.type}
            $isCartOverlay={this.props.$isCartOverlay}
          >
            <Block.Input 
              type="radio" 
              id={this.props.$productIndex + attribute.name + item.displayValue + `${this.props.$isCartOverlay ? 'cartOverlay' : ''}`}
              name={attribute.name} 
              value={item.displayValue}
              $attributeType={attribute.type}
              defaultChecked={this.props.$styleType === 'product-page' ? item.displayValue === attribute.items[0].displayValue : item.displayValue === this.props.checkedAttributes[attribute.name]}
              disabled={this.props.$styleType !== 'product-page'}
              $styleType={this.props.$styleType}
            />
            <Block.Label 
              htmlFor={this.props.$productIndex + attribute.name + item.displayValue + `${this.props.$isCartOverlay ? 'cartOverlay' : ''}`}
              $isCartOverlay={this.props.$isCartOverlay}
              $attributeType={attribute.type}
            >
              {attribute.type !== 'swatch' && item.displayValue}
            </Block.Label>
          </Block.Value>
        ))}
      </Block>
    )
  }
}

export default Radio;