import styled from 'styled-components';

const Block = styled.div`
`;

Block.Title = styled.h1`
  font-size: 42px;
  font-weight: 400;
  margin-bottom: 128px;
`;

Block.List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 40px;
  row-gap: 100px;
`;

export default Block;