import styled, { css } from 'styled-components';

const Block = styled.li`
  display: flex;
  justify-content: space-between;

  ${({ $isCartOverlay }) =>
    !$isCartOverlay &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.color.specialGrey};
      padding-top: 20px;
      padding-bottom: 19px;
      min-height: 328px;
  `}
`;

Block.QuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ $isCartOverlay }) => $isCartOverlay ? '24px' : '45px'};
`;

Block.ImageWrapper = styled.div`
  position: relative;
  margin-left: ${({ $isCartOverlay }) => $isCartOverlay ? '8px' : '24px'};
  height: ${({ $isCartOverlay }) => $isCartOverlay ? '190px' : '288px'};

  ${({ $isCartOverlay }) =>
    $isCartOverlay &&
    css`
      height: 190px;
  `}
`;

Block.Image = styled.img`
  object-fit: cover;
`;

export default Block;