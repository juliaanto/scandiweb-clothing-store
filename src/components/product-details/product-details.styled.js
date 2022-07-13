import styled from 'styled-components';

const Block = styled.form`
  width: 292px;
`;

Block.Brand = styled.h2`
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 6px;
`;

Block.Name = styled.p`
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 38px;
`;

Block.Attribute = styled.fieldset`
  border: none;
  margin-bottom: 23px;
`;

Block.Title = styled.legend`
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
  font-family: 'Roboto Condensed', sans-serif;
  margin-top: 38px;
`;

Block.Price = styled.p`
  font-weight: 700;
  font-size: 24px;
  margin-top: 16px;
  margin-bottom: 29px;
`;

export default Block;