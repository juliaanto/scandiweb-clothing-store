import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Block = styled.div`
  margin: 100px;
`;

Block.Text = styled.h1`
  margin-bottom: 16px;
`;

Block.Link = styled(Link)`
  text-decoration: underline;
`;

export default Block;