import { combineReducers } from '@reduxjs/toolkit';
import { shopData } from './shop-data/shop-data';
import { userProcess } from './user-process/user-process';
export const NameSpace = {
  ShopData: 'DATA',
  UserProcess: 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.ShopData]: shopData,
  [NameSpace.UserProcess]: userProcess,
});
