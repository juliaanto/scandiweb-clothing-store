import { changeCurrentCategory, changeCurrentCurrency, loadCategories, loadCurrencies, loadProduct, loadProducts } from '../action';

import { createReducer } from '@reduxjs/toolkit'
import { getCurrency } from '../../utils/currency';

const initialState = {
  products: [],
  categories: [],
  currentCategory: '',
  currencies: [],
  currentCurrency: null,
  product: null,
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
    .addCase(loadCurrencies, (state, action) => {
      const {currencies} = action.payload;

      state.currencies = currencies;
      state.currentCurrency = getCurrency(currencies);
    })
    .addCase(loadProduct, (state, action) => {
      const {product} = action.payload;

      state.product = product;
    })
    .addCase(changeCurrentCategory, (state, action) => {
      const {category} = action.payload;

      state.currentCategory = category;
    })
    .addCase(changeCurrentCurrency, (state, action) => {
      const {currency} = action.payload;

      state.currentCurrency = currency;
    });
});

export {shopData};