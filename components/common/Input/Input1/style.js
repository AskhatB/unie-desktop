import styled from 'react-emotion'

export const Input = styled.input`
  width: ${props => props.width || '380px'};
  height: ${props => props.height || '50px'};
  border-radius: 5px;
  box-sizing: border-box;
  padding: ${props => props.padding || '0 15px'};
  margin: ${props => props.margin};
  margin-bottom: ${props => props.mb};
  border: ${props => props.border || '1px solid rgba(40, 47, 54, 0.15)'};
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: ${props => props.fs || '16px'};
  color: ${props => props.color || '#282f36'};
  background: ${props => props.bg};
  outline: none;
`
