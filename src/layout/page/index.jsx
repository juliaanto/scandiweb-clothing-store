import Block from './page.styled';
import Header from '../header';
import React from 'react';

class Page extends React.Component {
  constructor({children}) {
    super();
    this._children = children;
  }
  
  render() {
    
    return (
      <Block>
        <Header />
        <Block.Main>
          {this._children}
        </Block.Main>
      </Block>
    )
  }
}

export default Page;