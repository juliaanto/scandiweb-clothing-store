import styled, { css } from 'styled-components';

const Block = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

Block.Item = styled.li`
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  padding: 12px 28px 12px 20px;

  &:hover {
    color: ${({ theme }) => theme.color.basicGrey};
  }
  
  ${({ $isCurrent }) =>
    $isCurrent &&
    css`
      background-color: ${({ theme }) => theme.color.basicNeutral};
  `}
`;

export default Block;