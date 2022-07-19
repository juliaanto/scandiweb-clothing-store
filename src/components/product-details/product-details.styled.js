import styled, { css } from 'styled-components';

const Block = styled.form`
  width: ${({$styleType}) => $styleType === 'cart-page' ? '50%' : '292px'};
  flex-grow: 1;

  ${({ $isCartOverlay }) =>
    $isCartOverlay &&
    css`
      max-width: 140px;
  `}
`;

Block.Brand = styled.h2`
  font-weight: ${({$isCartOverlay}) => $isCartOverlay ? '300' : '600'};
  font-size: ${({$isCartOverlay}) => $isCartOverlay ? '16px' : '30px'};
  margin-bottom: 6px;

  ${({$isCartOverlay}) => 
  $isCartOverlay &&
  css`
    margin-top: 4px;
  `}
`;

Block.Name = styled.p`
  font-weight: ${({$isCartOverlay}) => $isCartOverlay ? '300' : '400'};
  font-size: ${({$isCartOverlay}) => $isCartOverlay ? '16px' : '30px'};

  ${({ $styleType }) =>
    $styleType === 'product-page' &&
    css`
      margin-bottom: 38px;
  `}
`;

Block.Attribute = styled.fieldset`
  border: none;
  margin-bottom: ${({$styleType}) => $styleType === 'product-page' ? '23px' : '15px'}
`;

Block.Title = styled.h3`
  font-weight: ${({$isCartOverlay}) => $isCartOverlay ? '400' : '700'};
  font-size: ${({$isCartOverlay}) => $isCartOverlay ? '14px' : '18px'};

  ${({ $styleType }) =>
    $styleType === 'product-page' &&
    css`
      margin-top: 38px;
  `}

  ${({ $isCartOverlay }) =>
    !$isCartOverlay &&
    css`
      text-transform: uppercase;
      font-family: 'Roboto Condensed', sans-serif;
  `}
`;

Block.Price = styled.p`
  font-weight: ${({$isCartOverlay}) => $isCartOverlay ? '500' : '700'};
  font-size: ${({$isCartOverlay}) => $isCartOverlay ? '16px' : '24px'};
  margin-top: ${({$isCartOverlay}) => $isCartOverlay ? '14px' : '16px'};
  margin-bottom: ${({$styleType}) => $styleType === 'product-page' ? '29px' : '16px'};

  ${({ $isCartOverlay }) =>
    $isCartOverlay &&
    css`
      margin-bottom: 11px;
  `}
`;

export default Block;