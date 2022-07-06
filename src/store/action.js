import { ActionType } from './action-type';
import { createAction } from '@reduxjs/toolkit';

export const loadProducts = createAction(
  ActionType.LoadProducts,
  (products) => ({
    payload: {
      products,
    }
  })
)
