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
  object-fit: contain;
  align-self: flex-start;
`;

Block.Сharacteristics = styled.div`
  margin-left: 60px;
  width: 292px;
`;

Block.Description = styled.div`
  margin-top: 39px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.59;

  & * {
    font-family: inherit;
    line-height: inherit;
  }
`;

export default Block;