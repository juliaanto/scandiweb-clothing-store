import Block from './radio.styled';
import React from 'react';

class Radio extends React.Component {
  render() {
    return (
      <Block $attributeType={this.props.attributeType}>
        {this.props.attributes?.map((item) => (
          <Block.Value 
            key={item.displayValue}
            $attributeType={this.props.attributeType}
          >
            <Block.Input 
              hidden type="radio" 
              id={this.props.attributeName + item.displayValue} 
              name={this.props.attributeName} 
              value={item.displayValue}
              $attributeType={this.props.attributeType}
            />
            <Block.Label htmlFor={this.props.attributeName + item.displayValue}>{this.props.attributeType !== 'swatch' && item.displayValue}</Block.Label>
          </Block.Value>
        ))}
      </Block>
    )
  }
}

export default Radio;