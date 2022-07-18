import Block from './overlay.styled';
import React from 'react';
import ReactDOM from 'react-dom';

const modalRootElement = document.querySelector('#modal-root');

class Overlay extends React.Component {
  constructor() {
    super();
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }
  
  handleOutsideClick(event) {
    const buttonElement = document.querySelector(this.props.buttonId);
    const overlayElement = document.querySelector('#cart-overlay');
    const isClickInside = overlayElement?.contains(event.target) || buttonElement?.contains(event.target);

    if (!isClickInside) {
      this.props.handleClose();
    }
  }
  
  render() {
    if (!this.props.isOpen) {
      return null;
    }

    return ReactDOM.createPortal (
      <Block $isCartOverlay={this.props.$isCartOverlay}>
        <Block.Wrapper>
          {this.props.children}
        </Block.Wrapper>
      </Block>,
      modalRootElement,
    )
  }
}

export default Overlay;