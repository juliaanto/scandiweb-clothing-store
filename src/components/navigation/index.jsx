import { AppRoute } from '../../const';
import Block from './navigation.styled';
import { NameSpace } from '../../store/root-reducer';
import React from 'react';
import { changeCurrentCategory } from '../../store/action';
import { connect } from 'react-redux';
import { fetchProductsAction } from '../../store/api-actions';

const mapStateToProps = (state) => {
  const { categories, currentCategory } = state[NameSpace.ShopData];
  return { categories, currentCategory }
}

const mapDispatchToProps = (dispatch) => ({
  onCategoryChange(currentCategory) {
    dispatch(changeCurrentCategory(currentCategory));
    dispatch(fetchProductsAction(currentCategory));
  },
});

class Navigation extends React.Component {
  
  render() {
    const currentCategory = this.props.currentCategory;
    const categories = this.props.categories;
    
    return (
      <Block>
        {categories.map((item) => (
          <Block.Item
            to={AppRoute.Main}
            key={item.name} 
            $isCurrent={currentCategory === item.name}
            onClick={() => this.props.onCategoryChange(item.name)}
          >
            {item.name}
        </Block.Item>
        ))}
      </Block>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
