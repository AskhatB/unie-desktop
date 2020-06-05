import styled from 'react-emotion'

export const Button = styled.button`
  display: block;
  padding: 0 20px;
  box-sizing: border-box;
  cursor: pointer;
  border: 1px solid ${props => props.color || '#fff'};
  border-radius: ${props => props.round || '0'};
  background: transparent;
  font-size: 14px;
  font-weight: bold;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  color: ${props => props.color || '#fff'};
  margin-left: ${props => props.left || '0'};
  margin-right: ${props => props.right || '0'};
  margin-top: ${props => props.top || '0'};
  margin-bottom: ${props => props.bottom || '0'};
`
