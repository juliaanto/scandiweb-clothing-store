import { addProduct, deleteProductFromCart, updateProductQuantity } from '../action';

const { createReducer } = require('@reduxjs/toolkit')

const initialState = {
  productsInCart: [],
}

const userProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(addProduct, (state, action) => {
      const {product} = action.payload;

      state.productsInCart.push(product);
    })
    .addCase(updateProductQuantity, (state, action) => {
      const {productId, quantity} = action.payload;

      state.productsInCart.find((product) => product.id === productId).quantity = quantity;
    })
    .addCase(deleteProductFromCart, (state, action) => {
      const {productId} = action.payload;

      const deletedProductIndex = state.productsInCart.findIndex((product) => product.id === productId);
      state.productsInCart.splice(deletedProductIndex, 1);
    });
  });

export {userProcess};