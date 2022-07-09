import { CurrencySwitcher, Navigation } from '../../components';

import Block from './header.styled';
import { Button } from '../../ui';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <Block>
        <Navigation />
        <Block.Logo />
        <Block.Wrapper>
          <CurrencySwitcher />
          <Button $styleType='cart'/>
        </Block.Wrapper>
      </Block>
    )
  }
}

export default Header;