import styled, { css } from 'styled-components';

const Block = styled.li`
  padding-top: 20px;
  padding-bottom: 19px;
  display: flex;
  justify-content: space-between;

  ${({ $isCartOverlay }) =>
    !$isCartOverlay &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.color.specialGrey};
  `}
`;

Block.QuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 3px;
  margin-bottom: 3px;
`;

Block.ImageWrapper = styled.div`
  position: relative;
  margin-left: 24px;
`;

Block.Image = styled.img`
  object-fit: cover;
`;

export default Block;