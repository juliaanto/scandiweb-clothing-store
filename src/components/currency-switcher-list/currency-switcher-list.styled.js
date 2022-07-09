import styled, { css } from 'styled-components';

const Block = styled.div`
  position: absolute;
  top: 65px;
  right: 78px;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
`;

Block.List = styled.ul`
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