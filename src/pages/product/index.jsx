import Block from './product.styled';
import { Button } from '../../ui';
import { NameSpace } from '../../store/root-reducer';
import Page from '../../layout/page';
import { ProductDetails } from '../../components';
import React from 'react';
import { connect } from 'react-redux';
import { fetchProductAction } from '../../store/api-actions';

const mapStateToProps = (state) => {
  const { product } = state[NameSpace.ShopData];
  return { product }
}

const mapDispatchToProps = (dispatch) => ({
  onProductChange(productId) {
    dispatch(fetchProductAction(productId));
  },
});

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentImage: ''};
  }
  
  getProductId() {
    const pathname = window.location.pathname;
    const id = pathname.substring('/product/'.length);
    return id;
  }

  getDescription() {
    return {__html: this.props.product?.description};
  }

  componentDidMount() {
    this.props.onProductChange(this.getProductId());
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product !== this.props.product) {
      this.setState({currentImage: this.props.product.gallery[0]});
    }
  }
  
  render() {
    return (
      <Page>
        <Block>
        <Block.Preview>
          {this.props.product?.gallery?.map((image, index) => (
            <Block.PreviewImage
              key={index} 
              src={image} 
              width={80} 
              height={80} 
              alt={this.props.product?.name}
              onClick={() => this.setState({currentImage: image})}
            />
          ))}
        </Block.Preview>
        <Block.Image src={this.state?.currentImage} width={610} alt={this.props.product?.name}/>
        <Block.Сharacteristics>
          <ProductDetails product={this.props.product}/>
          <Button>Add to cart</Button>
          <Block.Description dangerouslySetInnerHTML={this.getDescription()} />
        </Block.Сharacteristics>
        </Block>
      </Page>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);