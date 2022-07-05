import Header from '../header';
import React from 'react';

class Page extends React.Component {
  constructor({children}) {
    super();
    this._children = children;
  }
  
  render() {
    
    return (
      <>
        <Header />
        {this._children}
      </>
    )
  }
}

export default Page;