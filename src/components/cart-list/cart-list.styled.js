import styled, { css } from 'styled-components';

const Block = styled.ul`
  ${({ $isCartOverlay }) =>
    !$isCartOverlay &&
    css`
      border-top: 1px solid ${({ theme }) => theme.color.specialGrey};
  `}
`;

Block.Text = styled.p`
`;

export default Block;