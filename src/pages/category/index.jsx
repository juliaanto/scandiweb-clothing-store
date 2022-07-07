import Block from './category.styled';
import { NameSpace } from '../../store/root-reducer';
import Page from '../../layout/page';
import { ProductCard } from '../../components';
import React from 'react';
import { connect } from 'react-redux';

class Category extends React.Component {

  render() {
    const products = this.props.products;
    
    return (
      <Page>
        <Block.Title>Category name</Block.Title>
        <Block.List>
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </Block.List>
      </Page>
    )
  }
}

function mapStateToProps(state) {
  const { products } = state[NameSpace.ShopData];
  return { products }
}

export default connect(mapStateToProps)(Category);