import styled from 'styled-components';

const Block = styled.header`
  padding: 7px 0 0;
  min-height: 77px;
  background-color: ${({ theme }) => theme.color.basicWhite};
  z-index: 11;
  position: fixed;
  width: 100%;
`;

Block.Wrapper = styled.div`
  max-width: 1440px;
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

Block.ButtonsWrapper = styled.div`
  display: flex;
  width: 10%;
  flex-grow: 1;
  justify-content: flex-end;
  column-gap: 22px;
`;

export default Block;