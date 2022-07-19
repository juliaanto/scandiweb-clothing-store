import styled from 'styled-components';

const Block = styled.div`
`;

Block.Title = styled.h1`
  text-transform: uppercase;
  margin-top: 3px;
  margin-bottom: 57px;
`;

Block.Total = styled.div`
  margin-top: 32px;
  width: 279px;
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 8px;
`;

Block.Text = styled.p`
  font-weight: ${({$weight}) => $weight};
  font-size: 24px;
`;

Block.ButtonWrapper = styled.div`
  width: 279px;
  height: 43px;
  margin-top: 16px;
`;

export default Block;