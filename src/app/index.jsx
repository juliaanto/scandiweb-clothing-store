import { Category } from '../pages';
import GlobalStyle from '../theme/globalStyle';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/theme';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Category />
      </ThemeProvider>
    )
  }
}

export default App;