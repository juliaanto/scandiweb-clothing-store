import { addProduct } from '../action';

const { createReducer } = require('@reduxjs/toolkit')

const initialState = {
  productsInCart: [],
}

const userProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(addProduct, (state, action) => {
      const {product} = action.payload;

      state.productsInCart.push(product);
    });
  });

export {userProcess};