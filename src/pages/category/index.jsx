import Block from './category.styled';
import { NameSpace } from '../../store/root-reducer';
import Page from '../../layout/page';
import { ProductCard } from '../../components';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { products, currentCategory } = state[NameSpace.ShopData];
  return { products, currentCategory }
}

class Category extends React.Component {
  
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

export default connect(mapStateToProps)(Category);