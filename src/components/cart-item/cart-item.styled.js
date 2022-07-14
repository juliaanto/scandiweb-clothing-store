import styled from 'styled-components';

const Block = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.color.specialGrey};
  padding-top: 20px;
  padding-bottom: 18px;
`;

export default Block;