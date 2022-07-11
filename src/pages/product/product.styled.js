import styled from 'styled-components';

const Block = styled.div`
  display: flex;
  column-gap: 40px;
`;

Block.Preview = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

Block.PreviewImage = styled.img`
  cursor: pointer;
  object-fit: cover;
`;

Block.Image = styled.img`
`;

Block.Сharacteristics = styled.div`
  margin-left: 60px;
  width: 292px;
`;

Block.Description = styled.p`
  margin-top: 39px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 25.59px;
`;

export default Block;