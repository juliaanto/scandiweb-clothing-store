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
