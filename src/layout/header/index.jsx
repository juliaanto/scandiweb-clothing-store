import { CartButton, CurrencySwitcher, Navigation } from '../../components';

import Block from './header.styled';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <Block>
        <Navigation />
        <Block.Logo />
        <Block.Wrapper>
          <CurrencySwitcher />
          <CartButton />
        </Block.Wrapper>
      </Block>
    )
  }
}

export default Header;