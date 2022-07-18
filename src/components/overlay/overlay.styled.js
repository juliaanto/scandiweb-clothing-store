import styled, { css } from 'styled-components';

const Block = styled.div`
  position: fixed;
  top: 78px;
  right: calc(50% - 640px);
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  background-color: ${({ theme }) => theme.color.basicWhite};
  display: flex;
  z-index: 10;

  ${({$isCartOverlay}) => 
    $isCartOverlay &&
    css`
      &::before {
        content: "";
        top: 0;
        right: 0;
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: ${({ theme }) => theme.color.specialDarkGrey};
        opacity: 0.22;
        cursor: pointer;
        z-index: 3;
      }
    `
  }
`;

Block.Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.basicWhite};
  z-index: 4;
`;

export default Block;