import { createReducer } from '@reduxjs/toolkit'
import { loadProducts } from '../action';

const initialState = {
  products: [],
}

const shopData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadProducts, (state, action) => {
      const {products} = action.payload;

      state.products = products;
    });
});

export {shopData};