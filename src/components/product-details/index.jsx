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
      <Block id="product-form" $styleType={this.props.$styleType} $isCartOverlay={this.props.$isCartOverlay}>
        <Block.Brand $isCartOverlay={this.props.$isCartOverlay}>{this.props.product?.brand}</Block.Brand>
        <Block.Name 
          $styleType={this.props.$styleType} 
          $isCartOverlay={this.props.$isCartOverlay}
        >
          {this.props.product?.name}
        </Block.Name>
        
        {this.props.$styleType === 'cart-page' &&
          <Block.Price
            $styleType={this.props.$styleType} 
            $isCartOverlay={this.props.$isCartOverlay}
          >
            {price?.currency.symbol}{price?.amount}
          </Block.Price>
        }
        
        {this.props.product?.attributes.map((item) => (
          <Block.Attribute key={item.id} $styleType={this.props.$styleType}>
            <Block.Title $isCartOverlay={this.props.$isCartOverlay}>{item.name}:</Block.Title>
            <Radio 
              attribute={item} 
              checkedAttributes={this.props.product?.checkedAttributes} 
              $styleType={this.props.$styleType}
              $isCartOverlay={this.props.$isCartOverlay}
            />
          </Block.Attribute>
        ))}

        {this.props.$styleType === 'product-page' &&
          <>
            <Block.Title $styleType={this.props.$styleType}>Price:</Block.Title>
            <Block.Price 
              $styleType={this.props.$styleType} 
              $isCartOverlay={this.props.$isCartOverlay}
            >
              {price?.currency.symbol}{price?.amount}
            </Block.Price>
          </>
        }
      </Block>
    )
  }
}

export default connect(mapStateToProps)(ProductDetails);