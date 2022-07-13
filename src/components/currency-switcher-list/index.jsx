import Block from './currency-switcher-list.styled';
import { NameSpace } from '../../store/root-reducer';
import React from 'react';
import ReactDOM from 'react-dom';
import { changeCurrentCurrency } from '../../store/action';
import { connect } from 'react-redux';
import { getCurrency } from '../../utils/currency';

const mapStateToProps = (state) => {
  const { currencies } = state[NameSpace.ShopData];
  return { currencies }
}

const mapDispatchToProps = (dispatch) => ({
  onCurrencyChange(currentCurrency) {
    dispatch(changeCurrentCurrency(currentCurrency));
  },
});

class CurrencySwitcherList extends React.Component {
  constructor() {
    super();
    this.state = {
      currency: getCurrency(this.props?.currencies)
    }
  }
  
  setState(state) {
    window.localStorage.setItem('currency', JSON.stringify(state.currency));
    super.setState(state);
  }
    
  changeCurrency(currentCurrency) {
    this.props.onCurrencyChange(currentCurrency);
    return this.setState({...this.state, currency: currentCurrency});
  }
  
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
              $isCurrent={getCurrency(this.props?.currencies).label === item.label}
              onClick={() => this.changeCurrency(item)}
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