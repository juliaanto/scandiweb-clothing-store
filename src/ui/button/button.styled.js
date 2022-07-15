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
          position: relative;

          & svg {
            fill: ${({ theme }) => theme.color.specialDark};
          }

          ${({$quantity}) =>
            $quantity > 0 &&
            css`
              &:after {
                content: "${({ $quantity }) => $quantity}";
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 20px;
                width: 20px;
                background-color: ${({ theme }) => theme.color.basicDark};
                color: ${({ theme }) => theme.color.basicWhite};
                border-radius: 50%;
                font-family: 'Roboto', sans-serif;
                font-size: 14px;
                font-weight: 700;
                top: -7px;
                right: -12px;
              }
            `}
        `;
      case 'add-to-cart':
        return css`
          position: absolute;
          width: 52px;
          height: 52px;
          background-color: ${({ theme }) => theme.color.basicGreen};
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
      case 'arrow':
        return css`
          position: absolute;
          background-color: ${({ theme }) => theme.color.basicBlack};
          width: 24px;
          height: 24px;
          right: ${({ $isPrev }) => $isPrev ? '48px' : '16px'};
          bottom: 16px;
          opacity: 0.73;

          &:after {
            position: absolute;
            content: "";
            height: 8px;
            width: 8px;
            transform: translate(${({ $isPrev }) => $isPrev ? '-30%' : '-75%'}, -50%) rotate(${({ $isPrev }) => $isPrev ? '135deg' : '315deg'});
            border-bottom: 1.5px solid ${({ theme }) => theme.color.basicWhite};
            border-right: 1.5px solid ${({ theme }) => theme.color.basicWhite};
            bottom: center;
            right: center;
          }
        `;
      case 'quantity':
        return css`
          width: 45px;
          height: 45px;
          border: 1px solid ${({ theme }) => theme.color.basicDark};
          font-size: 50px;

          ${({$isPlus}) =>
            $isPlus ?
            css`
              &::before,
              &::after {
                position: absolute;
                content: "";
                width: 15px;
                border-bottom: 1px solid ${({ theme }) => theme.color.basicDark};
                bottom: center;
                right: center;
              }

              &::before {
                transform: translateX(-50%);
              }
              
              &::after {
                transform: translateX(-50%) rotate(90deg);
              }
            `
            :
            css`
              &::before {
                position: absolute;
                content: "";
                width: 15px;
                border-bottom: 1px solid ${({ theme }) => theme.color.basicDark};
                bottom: center;
                right: center;
              }

              &::before {
                transform: translateX(-50%);
              }
            `
          }
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.color.basicGreen};
          color: ${({ theme }) => theme.color.basicWhite};
          text-transform: uppercase;
          font-weight: 600;
          font-size: 16px;
          width: 100%;
          padding-top: 16px;
          padding-bottom: 16px;
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

          &:after {
            background-color: ${({ theme }) => theme.color.basicGrey};
          }
        `;
      case 'add-to-cart':
        return css`
          background-color: ${({ theme }) => theme.color.specialGreen};
        `;
      case 'arrow':
        return css`
          opacity: 0.85;
        `;
      case 'quantity':
        return css`
          background-color: ${({ theme }) => theme.color.basicNeutral};
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.color.specialGreen};
        `;
      }
    }}
  }

  &:active {
    ${(props) => {
    switch (props.$styleType) {
      case 'currency':
        return css`
        `;
      case 'cart':
        return css`
        `;
      case 'add-to-cart':
        return css`
        `;
      case 'arrow':
        return css`
          opacity: 0.73;
        `;
      case 'quantity':
        return css`
          background-color: ${({ theme }) => theme.color.basicWhite};;
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.color.basicGreen};
        `;
      }
    }}
  }

  &:disabled {
    ${(props) => {
    switch (props.$styleType) {
      default:
        return css`
          cursor: auto;
          background-color: ${({ theme }) => theme.color.basicGrey};
        `;
      }
    }}
  }
`;

export default Button;