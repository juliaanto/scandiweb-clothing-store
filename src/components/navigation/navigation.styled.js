import styled, {css} from 'styled-components';

const Block = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 10%;
  flex-grow: 1;
`;

Block.Item = styled.li`
  text-transform: uppercase;
  padding: 21px 16px 32px;
  cursor: pointer;

  ${({ $isCurrent, theme }) =>
    $isCurrent &&
    css`
      color: ${theme.color.basicGreen};
      border-bottom: 2px solid ${theme.color.basicGreen};
    }
  `}

  &:hover {
    color: ${({ theme }) => theme.color.basicGrey};
  }
`;

export default Block;
