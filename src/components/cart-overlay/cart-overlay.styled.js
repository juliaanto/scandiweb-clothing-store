import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Block = styled.div`
  padding: 36px 16px 32px;
  display: flex;
  flex-direction: column;
  width: 325px;
  overflow: scroll;
  max-height: 60vh;
`;

Block.TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 35px;
`;

Block.Text = styled.p`
  font-weight: ${({$weight}) => $weight};
  font-size: 16px;
`;

Block.ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 32px;
  height: 43px;
`;

Block.Link = styled(Link)`
  text-transform: uppercase;
  border: 1px solid ${({ theme }) => theme.color.basicDark};
  width: 140px;
  display: block;
  padding: 13px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
`;

Block.TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

export default Block;