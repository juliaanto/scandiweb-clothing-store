import Block from './currency-switcher-list.styled';
import { NameSpace } from '../../store/root-reducer';
import React from 'react';
import ReactDOM from 'react-dom';
import { changeCurrentCurrency } from '../../store/action';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { currencies, currentCurrency } = state[NameSpace.ShopData];
  return { currencies, currentCurrency }
}

const mapDispatchToProps = (dispatch) => ({
  onCurrencyChange(currentCurrency) {
    dispatch(changeCurrentCurrency(currentCurrency));
  },
});

class CurrencySwitcherList extends React.Component {
  render() {
    if (!this.props.isOpen) {
      return null;
    }
    
    return ReactDOM.createPortal (
      <Block>
        <Block.List>
          {this.props.currencies.map((item) => (
            <Block.Item 
              key={item.label} 
              $isCurrent={this.props.currentCurrency.label === item.label}
              onClick={() => this.props.onCurrencyChange(item)}
            >
              {item.symbol} {item.label}
            </Block.Item>
          ))}
        </Block.List>
      </Block>,
      this.props.container,
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcherList);