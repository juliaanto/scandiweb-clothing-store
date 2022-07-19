import styled, { css } from 'styled-components';

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({$attributeType, $isCartOverlay}) => ($attributeType === 'swatch') || $isCartOverlay ? '8px' : '12px'};
  padding-top: ${(props) => props.$attributeType === 'swatch' || props.$isCartOverlay ? '8px' : '5px'};
`;

Block.Value = styled.div`
  display: flex;
  position: relative;
  
  ${(props) => {
      switch (props.$attributeType) {
        case 'swatch':
          return css`
            min-width: ${({$isCartOverlay}) => $isCartOverlay ? '16px' : '32px'};
            min-height: ${({$isCartOverlay}) => $isCartOverlay ? '16px' : '32px'};
            `;
        default:
          return css`
            border: 1px solid ${({ theme }) => theme.color.basicDark};
          `;
      }
    }}
`;

Block.Input = styled.input`
  display: none;
  
  ${(props) => {
      switch (props.$attributeType) {
        case 'swatch':
          return css`
          & + label::before {
              cursor: ${({$styleType}) => $styleType !== 'product-page' ? 'auto' : 'pointer'};
              content: "";
              position: absolute;
              width: 100%;
              height: 100%;
              background-color: ${props.value};
          }
          &:checked + label::before {
            outline: 1px solid ${({ theme }) => theme.color.basicGreen};
            outline-offset: 1px;
          } 
            `;
        default:
          return css`
          & + label::before {
            cursor: ${({$styleType}) => $styleType !== 'product-page' ? 'default' : 'pointer'};
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
          }

          &:checked + label {
            cursor: ${({$styleType}) => $styleType !== 'product-page' ? 'default' : 'pointer'};
            color: ${({ theme }) => theme.color.basicWhite};
            background-color: ${({ theme }) => theme.color.basicDark};
          } 
          `;
      }
    }}
`;

Block.Label = styled.label`
  font-family: 'Source Sans Pro', sans-serif;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({$isCartOverlay}) => $isCartOverlay ? '2px 4px' : '12px 20px'};
  font-weight: 400;
  font-size: ${({$isCartOverlay}) => $isCartOverlay ? '14px' : '16px'};

  ${({$attributeType}) => 
    $attributeType === 'swatch' &&
      css`
        padding: 0;
      `
    }
`;

export default Block;