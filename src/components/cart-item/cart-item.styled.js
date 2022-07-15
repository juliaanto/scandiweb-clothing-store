import styled from 'styled-components';

const Block = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.color.specialGrey};
  padding-top: 20px;
  padding-bottom: 19px;
  display: flex;
  justify-content: space-between;
`;

Block.QuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 288px;
  justify-content: space-between;
  margin-top: 3px;
  margin-bottom: 3px;
`;

Block.ImageWrapper = styled.div`
  width: 200px;
  height: 288px;
  position: relative;
  margin-left: 24px;
`;

Block.Image = styled.img`
  object-fit: cover;
`;

export default Block;