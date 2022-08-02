import { addProduct, getProductQuantity } from '../../utils/cart';
import { updateCartList, updateQuantityInCart } from '../../store/action';

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
  const { productsInCart } = state[NameSpace.UserProcess];
  return { product, productsInCart }
}

const mapDispatchToProps = (dispatch) => ({
  onProductChange(productId) {
    dispatch(fetchProductAction(productId));
  },
  onProductAdd(productList) {
    dispatch(updateCartList(productList));
    dispatch(updateQuantityInCart(getProductQuantity()));
  },
});

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: null,
    };
  }
  
  getProductId() {
    const pathname = window.location.pathname;
    const id = pathname.substring('/product/'.length);
    return id;
  }

  setDescription() {
    const descriptionElement = document.querySelector("#description");
    if (descriptionElement.childNodes.length > 0) {
      return;
    }
    const description = new DOMParser().parseFromString(this.props.product?.description, 'text/html').body.firstChild;
    descriptionElement.appendChild(description);
  }

  handleAddToCartClick() {
    const addedProduct = {...this.props.product};

    const form = document.querySelector(`#product-${this.props.product.id}-${this.props.$isCartOverlay}`);
    const data = new FormData(form);

    let checkedAttributes = {};
    for (const entry of data.entries()) {
      checkedAttributes[entry[0]] = entry[1];
    };

    addedProduct['checkedAttributes'] = checkedAttributes;

    const updatedProductList = addProduct(this.props.productsInCart, addedProduct);
    
    this.props.onProductAdd(updatedProductList);
  }

  componentDidMount() {
    this.props.onProductChange(this.getProductId());
  }

  componentDidUpdate() {
    document.title = this.props.product?.brand + ' ' + this.props.product?.name;
    this.props.onProductChange(this.getProductId());
    this.setDescription();
  }

  componentWillUnmount() {
    this.props.onProductChange(null);
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
          <Block.ImageWrapper $isInStock={this.props.product?.inStock}>
            <Block.Image 
              src={this.state.currentImage ? this.state.currentImage : this.props.product?.gallery[0]} 
              width={610} 
              alt={this.props.product?.name}
            />
          </Block.ImageWrapper>
          <Block.Сharacteristics>
            <ProductDetails product={this.props.product} $styleType='product-page' $productIndex={this.props.productsInCart.indexOf(this.props.product)} />
            <Button disabled={!this.props.product?.inStock} onClick={() => this.handleAddToCartClick()}>Add to cart</Button>
            <Block.Description id="description" />
          </Block.Сharacteristics>
        </Block>
      </Page>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);