import styled, { css } from 'styled-components';

const Block = styled.ul`
  display: flex;
  flex-direction: column;
  
  ${({ $isCartOverlay }) =>
    $isCartOverlay ?
    css`
      row-gap: 40px;
    ` :
    css`
      border-top: 1px solid ${({ theme }) => theme.color.specialGrey};
  `}
`;

Block.Text = styled.p`
`;

export default Block;