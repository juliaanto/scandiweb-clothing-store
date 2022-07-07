import { fetchCategoriesAction, fetchProductsAction } from './store/api-actions';

import { ApolloProvider } from '@apollo/client';
import App from './app';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import client from './services/client';
import { configureStore } from '@reduxjs/toolkit';
import { redirect } from './store/middlewares/redirect';
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './store/root-reducer';

const store = configureStore({ 
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: {
      extraArgument: client,
    },
  }).concat(redirect),
});

store.dispatch(fetchProductsAction());
store.dispatch(fetchCategoriesAction());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
