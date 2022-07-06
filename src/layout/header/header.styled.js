import { ReactComponent as IconLogo } from '../../assets/logo.svg';
import styled from 'styled-components';

const Block = styled.header`
  padding: 4px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

Block.Logo = styled(IconLogo)`
  
`;

Block.Wrapper = styled.div`
  display: flex;
  width: 10%;
  flex-grow: 1;
  justify-content: flex-end;
  column-gap: 22px;

`;

export default Block;