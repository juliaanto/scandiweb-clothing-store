import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

const Block = styled(Link)`
  width: 386px;
  padding: 16px;
  display: flex;
  position: relative;

  ${({ $isInStock }) =>
    $isInStock &&
    css`
      &:hover {
        cursor: pointer;
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
      }

      &:hover div {
        z-index: 1;
      }
  `}
`;

Block.Wrapper = styled.div`
  margin: 0 auto;
  z-index: 2;
  background-color: ${({ theme }) => theme.color.basicWhite};

  ${({ $isInStock }) =>
    !$isInStock &&
    css`
      position: relative;
    
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
        width: 354px;
        height: 330px;
        background-color: ${({ theme }) => theme.color.basicWhite};
        opacity: 0.5;
        top: 0;
      }
    }
  `}
`;

Block.Image = styled.img`
  object-fit: cover;
`;

Block.Title = styled.h2`
  font-size: 18px;
  font-weight: 300;
  margin-top: 24px;
  margin-bottom: 8px;

  ${({ $isInStock }) =>
    !$isInStock &&
    css`
      color: ${({ theme }) => theme.color.basicGrey};
  `}
`;

Block.Price = styled.p`
  font-size: 18px;
  font-weight: 500;
  
  ${({ $isInStock }) =>
    !$isInStock &&
    css`
      color: ${({ theme }) => theme.color.basicGrey};
  `}
`;


export default Block;