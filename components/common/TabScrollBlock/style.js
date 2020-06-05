import styled from 'react-emotion'

export const Item = styled.div`
  width: 50%;
  cursor: pointer;
  font-weight: 600;
  height: 40px;
  font-size: 14px;
  font-size: ${props => props.fontSize || '14px'};
  color: ${props => (props.active && '#77BEFF') || '#93979b'};
  border: ${props => (props.active && '1px solid #77BEFF') || 'none'};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`
