import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Category, Product } from '../pages';

import { AppRoute } from '../const';
import Cart from '../pages/cart';
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
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}

export default App;