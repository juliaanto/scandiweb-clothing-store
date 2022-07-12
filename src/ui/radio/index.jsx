import Block from './radio.styled';
import React from 'react';

class Radio extends React.Component {
  render() {
    const attribute = this.props.attribute;
    
    return (
      <Block $attributeType={attribute.type}>
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
            />
            <Block.Label htmlFor={attribute.name + item.displayValue}>{attribute.type !== 'swatch' && item.displayValue}</Block.Label>
          </Block.Value>
        ))}
      </Block>
    )
  }
}

export default Radio;