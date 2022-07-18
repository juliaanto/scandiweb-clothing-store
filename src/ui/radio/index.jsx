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
          >
            <Block.Input 
              hidden type="radio" 
              id={attribute.name + item.displayValue} 
              name={attribute.name} 
              value={item.displayValue}
              $attributeType={attribute.type}
              defaultChecked={this.props.$styleType === 'product-page' ? item.displayValue === attribute.items[0].displayValue : item.displayValue === this.props.checkedAttributes[attribute.name]}
              disabled={this.props.$styleType !== 'product-page'}
              $styleType={this.props.$styleType}
            />
            <Block.Label 
              htmlFor={attribute.name + item.displayValue}
              $isCartOverlay={this.props.$isCartOverlay}
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