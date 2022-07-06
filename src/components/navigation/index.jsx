import Block from './navigation.styled';
import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <Block>
        <Block.Link href="#" $isCurrent>Women</Block.Link>
        <Block.Link href="#">Men</Block.Link>
        <Block.Link href="#">Kids</Block.Link>
      </Block>
    )
  }
}

export default Navigation;