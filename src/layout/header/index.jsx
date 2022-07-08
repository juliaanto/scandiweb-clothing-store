import { CurrencySelector, Navigation } from '../../components';

import Block from './header.styled';
import { Button } from '../../ui';
import { NameSpace } from '../../store/root-reducer';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { currentCurrency } = state[NameSpace.ShopData];
  return { currentCurrency }
}

const modalRootElement = document.querySelector('#modal-root');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCurrencySelectorOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const currencyElement = document.querySelector('#currency');
    
    document.addEventListener('click', (event) => {
      const isClickInside = currencyElement.contains(event.target);

      if (!isClickInside) {
        this.setState({isCurrencySelectorOpen: false});
      }
    }); 
  }
  
  handleClick() {
    this.setState(prevState => ({
      isCurrencySelectorOpen: !prevState.isCurrencySelectorOpen
    }));
  }
  
  render() {
    return (
      <Block>
        <CurrencySelector isOpen={this.state.isCurrencySelectorOpen} container={modalRootElement} />
        <Navigation />
        <Block.Logo />
        <Block.Wrapper>
          <Button 
            $styleType='currency' 
            $isCurrencyOpen={this.state.isCurrencySelectorOpen} 
            $currentCurrency={this.props.currentCurrency?.symbol}
            onClick={this.handleClick}
          />
          <Button $styleType='cart'/>
        </Block.Wrapper>
      </Block>
    )
  }
}

export default connect(mapStateToProps)(Header);