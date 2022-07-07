import { combineReducers } from '@reduxjs/toolkit';
import { shopData } from './shop-data/shop-data';

export const NameSpace = {
  ShopData: 'DATA',
  UserProcess: 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.ShopData]: shopData,
});
