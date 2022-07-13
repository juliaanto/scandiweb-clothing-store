import { Button } from '../../ui';
import { CurrencySwitcherList } from '../../components';
import { NameSpace } from '../../store/root-reducer';
import React from 'react';
import { connect } from 'react-redux';
import { getCurrency } from '../../utils/currency';

const modalRootElement = document.querySelector('#modal-root');

const mapStateToProps = (state) => {
  const { currencies } = state[NameSpace.ShopData];
  return { currencies }
}

class CurrencySwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCurrencySelectorOpen: false 
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }
  
  handleClick() {
    this.setState(prevState => ({
      isCurrencySelectorOpen: !prevState.isCurrencySelectorOpen
    }));
  }

  handleOutsideClick(event) {
    const currencyElement = document.querySelector('#currency');
    const isClickInside = currencyElement.contains(event.target);

    if (!isClickInside) {
      this.setState({isCurrencySelectorOpen: false});
    }
  }
  
  render() {
    return (
      <>
        <CurrencySwitcherList isOpen={this.state.isCurrencySelectorOpen} container={modalRootElement} />
        <Button 
          $styleType='currency' 
          $isCurrencyOpen={this.state.isCurrencySelectorOpen} 
          $currentCurrency={getCurrency(this.props.currencies)?.symbol}
          onClick={this.handleClick}
        />
      </>
    )
  }
}

export default connect(mapStateToProps)(CurrencySwitcher);