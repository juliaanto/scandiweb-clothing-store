import { changeCurrentCategory, loadCategories, loadProducts } from '../action';

import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  categories: [],
  currentCategory: '',
}

const shopData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadProducts, (state, action) => {
      const {products} = action.payload;

      state.products = products;
    })
    .addCase(loadCategories, (state, action) => {
      const {categories} = action.payload;

      state.categories = categories;
      state.currentCategory = categories[0].name;
    })
    .addCase(changeCurrentCategory, (state, action) => {
      const {category} = action.payload;

      state.currentCategory = category;
    });
});

export {shopData};