import { ApolloProvider } from '@apollo/client';
import App from './app';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import client from './services/client';
import reportWebVitals from './reportWebVitals';
import store from './store/store';

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
