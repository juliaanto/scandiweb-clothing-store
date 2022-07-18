import styled from 'styled-components';

const Block = styled.input`
  border: none;
  text-align: center;
  font-weight: 500;
  font-size: ${({ $isCartOverlay }) => $isCartOverlay ? '16px' : '24px'};

  &:disabled {
    background-color: transparent;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
  -moz-appearance: textfield;
  }
`;

export default Block;
