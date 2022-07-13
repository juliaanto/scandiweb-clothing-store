import Block from './page.styled';
import Header from '../header';
import React from 'react';

class Page extends React.Component {
  render() {
    return (
      <Block>
        <Header />
        <Block.Main>
          {this.props.children}
        </Block.Main>
      </Block>
    )
  }
}

export default Page;