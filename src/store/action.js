import { ActionType } from './action-type';
import { createAction } from '@reduxjs/toolkit';

export const loadProducts = createAction(
  ActionType.LoadProducts,
  (products) => ({
    payload: {
      products,
    }
  })
);

export const loadCategories = createAction(
  ActionType.LoadCategories,
  (categories) => ({
    payload: {
      categories,
    }
  })
);

export const changeCurrentCategory = createAction(
  ActionType.ChangeCurrentCategory,
  (category) => ({
    payload: {
      category,
    }
  })
);

export const loadCurrencies = createAction(
  ActionType.LoadCurrencies,
  (currencies) => ({
    payload: {
      currencies,
    }
  })
);

export const changeCurrentCurrency = createAction(
  ActionType.ChangeCurrentCurrency,
  (currency) => ({
    payload: {
      currency,
    }
  })
);

export const loadProduct = createAction(
  ActionType.LoadProduct,
  (product) => ({
    payload: {
      product,
    }
  })
);

export const updateCartList = createAction(
  ActionType.UpdateCartList,
  (productList) => ({
    payload: {
      productList,
    }
  })
);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url) => ({
    payload: url,
  }),
);

export const updateProductQuantity = createAction(
  ActionType.UpdateProductQuantity,
  (productIndex, quantity) => ({
    payload: {
      productIndex, quantity,
    }
  })
);

export const deleteProductFromCart = createAction(
  ActionType.DeleteProductFromCart,
  (productIndex) => ({
    payload: {
      productIndex,
    }
  })
);

export const updateQuantityInCart = createAction(
  ActionType.UpdateQuantityInCart,
  (quantity) => ({
    payload: {
      quantity,
    }
  })
);
