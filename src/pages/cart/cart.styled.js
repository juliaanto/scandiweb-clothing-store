import styled from 'styled-components';

const Block = styled.div`
`;

Block.Title = styled.h1`
  text-transform: uppercase;
  margin-top: 3px;
  margin-bottom: 57px;
`;

Block.ProductList = styled.ul`
  border-top: 1px solid ${({ theme }) => theme.color.specialGrey};
`;

Block.Text = styled.p`
`;

export default Block;