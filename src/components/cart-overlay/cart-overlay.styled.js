import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Block = styled.div`
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  width: 325px;
  overflow: scroll;
  height: 60vh;
`;

Block.TitleWrapper = styled.div`
  display: flex;
`;

Block.Title = styled.p`
  font-weight: 700;
  font-size: 16px;
`;

Block.Text = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

Block.ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

Block.Link = styled(Link)`
  text-transform: uppercase;
  border: 1px solid ${({ theme }) => theme.color.basicDark};
  width: 140px;
  display: block;
  padding: 13px;
  text-align: center;
`;

export default Block;