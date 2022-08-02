import Block from './category.styled';
import { NameSpace } from '../../store/root-reducer';
import Page from '../../layout/page';
import { ProductCard } from '../../components';
import React from 'react';
import { connect } from 'react-redux';
import { fetchProductsAction } from '../../store/api-actions';

const mapStateToProps = (state) => {
  const { products, currentCategory } = state[NameSpace.ShopData];
  return { products, currentCategory }
};

const mapDispatchToProps = (dispatch) => ({
  onCategoryChange(currentCategory) {
    dispatch(fetchProductsAction(currentCategory));
  },
});

class Category extends React.Component {
  componentDidMount() {
    this.props.onCategoryChange(this.props.currentCategory);
  }
  
  componentDidUpdate() {
    document.title = this.props.currentCategory.charAt(0).toUpperCase() + this.props.currentCategory.slice(1);
  }
  
  render() {
    const products = this.props.products;
    const currentCategory = this.props.currentCategory;
    
    return (
      <Page>
        <Block.Title>{currentCategory}</Block.Title>
        <Block.List>
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </Block.List>
      </Page>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);