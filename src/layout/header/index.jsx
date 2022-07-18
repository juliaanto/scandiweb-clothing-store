import { CartButton, CurrencySwitcher, Navigation } from '../../components';

import Block from './header.styled';
import { ReactComponent as IconLogo } from '../../assets/logo.svg';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <Block>
        <Block.Wrapper>
          <Navigation />
          <IconLogo />
          <Block.ButtonsWrapper>
            <CurrencySwitcher />
            <CartButton />
          </Block.ButtonsWrapper>
        </Block.Wrapper>
      </Block>
    )
  }
}

export default Header;