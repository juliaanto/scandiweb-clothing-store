import { CurrencySwitcherList, Overlay } from '../../components';

import { Button } from '../../ui';
import { NameSpace } from '../../store/root-reducer';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { currentCurrency } = state[NameSpace.ShopData];
  return { currentCurrency }
}

class CurrencySwitcher extends React.Component {
  constructor() {
    super();
    this.state = {
      isCurrencySelectorOpen: false 
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isCurrencySelectorOpen: !prevState.isCurrencySelectorOpen
    }));
  }
  
  render() {
    return (
      <>
        <Overlay isOpen={this.state.isCurrencySelectorOpen} handleClose={() => this.setState({isCurrencySelectorOpen: false})} buttonId="#currency">
          <CurrencySwitcherList />
        </Overlay>
        <Button 
          $styleType='currency' 
          $isCurrencyOpen={this.state.isCurrencySelectorOpen} 
          $currentCurrency={this.props.currentCurrency?.symbol}
          onClick={this.handleClick}
          id='currency'
        />
      </>
    )
  }
}

export default connect(mapStateToProps)(CurrencySwitcher);