import styled from 'styled-components';

const Block = styled.div`
  position: absolute;
  top: 65px;
  right: 78px;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  background-color: ${({ theme }) => theme.color.basicWhite};
`;

export default Block;