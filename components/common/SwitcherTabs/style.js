import styled from 'react-emotion'

export const Wrap = styled.div`
  display: flex;
`
export const Tab = styled.div`
  margin-right: 30px;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: bold;
  white-space: nowrap;
  text-transform: uppercase;
  color: #282f36;
  box-sizing: border-box;
  padding-top: 15px;
  ${props => props.active && `box-shadow: inset 0 5px 0 0 #2C5C9F`};
  cursor: pointer;
`
