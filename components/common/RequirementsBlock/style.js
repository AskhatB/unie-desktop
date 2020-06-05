import styled from 'react-emotion';

export const Wrap = styled.div`
  padding-bottom: 15px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eeeeef
`
export const Text = styled.div`
  font-family: Open Sans;
  font-size: ${props => props.fs || '14px'};
  font-weight: ${props => props.fw};
  margin-bottom: ${props => props.mb};
  color: #282F36
`
export const Item = styled.div`
  display: -webkit-box;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 0 6px;
  &:last-child{
    border: none
  }
`
export const Square = styled.div`
  background: #77BEFF;
  width: 5px !important;
  height: 5px !important;
  margin-right: 10px
`