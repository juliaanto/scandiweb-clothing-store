import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart, Category, Product, ServerIsUnavailable } from '../pages';

import { AppRoute } from '../const';
import GlobalStyle from '../theme/globalStyle';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/theme';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path={AppRoute.Main} element={<Category />} />
            <Route path={AppRoute.Product} element={<Product />} />
            <Route path={AppRoute.Cart} element={<Cart />} />
            <Route path={AppRoute.ServerIsUnavailable} element={<ServerIsUnavailable />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}

export default App;