import { combineReducers } from '@reduxjs/toolkit';
import { shopData } from './shop-data/shop-data';

export const NameSpace = {
  ShopData: 'DATA',
  UserActions: 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.ShopData]: shopData,
});
