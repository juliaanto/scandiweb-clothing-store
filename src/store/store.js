import { fetchCategoriesAction, fetchCurrenciesAction } from './api-actions';

import client from '../services/client';
import { configureStore } from '@reduxjs/toolkit';
import { redirect } from './middlewares/redirect';
import { rootReducer } from './root-reducer';

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem('state');
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const persistedStore = loadFromLocalStorage();

const store = configureStore({ 
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: {
      extraArgument: client,
    },
  }).concat(redirect),
  preloadedState: persistedStore,
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

store.dispatch(fetchCategoriesAction());
store.dispatch(fetchCurrenciesAction());

export default store;