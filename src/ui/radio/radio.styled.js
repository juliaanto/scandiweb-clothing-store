import styled, { css } from 'styled-components';

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.$attributeType === 'swatch' ? '8px' : '12px'};
  padding-top: ${(props) => props.$attributeType === 'swatch' ? '8px' : '5px'};
`;

Block.Value = styled.div`
  display: flex;
  position: relative;
  
  ${(props) => {
      switch (props.$attributeType) {
        case 'swatch':
          return css`
            min-width: 32px;
            min-height: 32px;
            `;
        default:
          return css`
            min-width: 63px;
            min-height: 45px;
            border: 1px solid ${({ theme }) => theme.color.basicDark};

          `;
      }
    }}
`;

Block.Input = styled.input`
  ${(props) => {
      switch (props.$attributeType) {
        case 'swatch':
          return css`
          & + label::before {
              cursor: pointer;
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
            cursor: pointer;
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
          }

          &:checked + label::before {
            background-color: ${({ theme }) => theme.color.basicDark};
            z-index: -1;
          } 

          &:checked + label {
            color: ${({ theme }) => theme.color.basicWhite};
          } 
          `;
      }
    }}
`;

Block.Label = styled.label`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 8px;
  padding-right: 8px;
`;

export default Block;