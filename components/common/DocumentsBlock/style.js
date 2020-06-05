import styled from 'react-emotion';

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