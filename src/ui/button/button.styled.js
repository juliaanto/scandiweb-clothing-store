import styled, { css } from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  border: none;
  background: none;

  ${(props) => {
    switch (props.$styleType) {
      case 'currency':
        return css`
          padding-right: 20px;
          font-weight: 500;
          font-size: 18px;
          position: relative;
          height: 100%;

          &:after {
            position: absolute;
            content: "";
            height: 4px;
            width: 4px;
            transform: rotate(${({ $isCurrencyOpen }) => $isCurrencyOpen ? '225deg' : '45deg'}) ;
            border-bottom: 1px solid black;
            border-right: 1px solid black;
            bottom: 8px;
            right: 3px;
          }
        `;
      case 'cart':
        return css`
          padding-top: 2px;
          height: 100%;

          & svg {
            fill: ${({ theme }) => theme.color.specialDark};;
          }
        `;

      case 'add-to-cart':
        return css`
          position: absolute;
          width: 52px;
          height: 52px;
          background-color: ${({ theme }) => theme.color.basicGreen};;
          border-radius: 50%;
          top: 320px;
          right: 30px;
          z-index: 1;

          & svg {
            fill: ${({ theme }) => theme.color.basicWhite};
            width: 24px;
            height: 24px;
          }
        `;
      default:
        return css`
        `;
    }
  }}

  &:hover {
    ${(props) => {
    switch (props.$styleType) {
      case 'currency':
        return css`
          color: ${({ theme }) => theme.color.basicGrey};

          &:after {
            border-color: ${({ theme }) => theme.color.basicGrey};
          }
        `;
      case 'cart':
        return css`
          & svg {
            fill: ${({ theme }) => theme.color.basicGrey};
          }
        `;
      case 'add-to-cart':
        return css`
          background-color: ${({ theme }) => theme.color.specialGreen};;
        `;
      default:
        return css`
        `;
      }
    }}
    
  }
`;

export default Button;