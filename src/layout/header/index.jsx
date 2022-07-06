import Block from './header.styled';
import { Button } from '../../ui';
import { Navigation } from '../../components';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <Block>
        <Navigation />
        <Block.Logo />
        <Block.Wrapper>
          <Button $styleType='currency' $isCurrencyOpen={false}/>
          <Button $styleType='cart'/>
        </Block.Wrapper>
      </Block>
    )
  }
}

export default Header;