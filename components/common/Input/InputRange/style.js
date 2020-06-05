import styled from 'react-emotion';

export const InputR = styled.input`
  -webkit-appearance: none;
  position: absolute !important;
  width: ${props => props.width || '100%'};
  left: -2px;
  bottom: -2px;
  height: 3px !important;
  padding: 0 !important;
  color: transparent;
  border: none !important;
  background: #77BEFF;
  outline: none;
  border-bottom-left-radius: 30px !important;
  border-bottom-right-radius: 30px !important;
  cursor: pointer;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none !important;
    background: #77BEFF;
  }
  &::-moz-range-progress {
    background-color: #77BEFF;
  }
  &::-ms-fill-lower {
    background-color: #77BEFF;
  }
`