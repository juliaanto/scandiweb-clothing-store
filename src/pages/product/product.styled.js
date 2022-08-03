import styled, { css } from 'styled-components';

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

Block.ImageWrapper = styled.div`
  position: relative;
  height: min-content;

${({ $isInStock }) =>
    !$isInStock &&
    css`
      &:before {
        display: block;
        position: absolute;
        content: "OUT OF STOCK";
        font-size: 24px;
        top: 50%;
        text-align: center;
        width: 100%;
        transform: translateY(-100%);
        color: ${({ theme }) => theme.color.basicGrey};
      }
      
      &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.color.basicWhite};
        opacity: 0.5;
        top: 0;
        left: 0;
      }
  `}
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