import styled from 'react-emotion'

export const Wrap = styled.div`
  width: ${props => props.width};
`
export const Heading = styled.div`
  font-family: Roboto Slab;
  font-weight: bold;
  font-size: 20px;
  color: #282f36;
  margin-bottom: 25px;
`
export const Item = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #282f36;
  height: 30px;
  &:hover {
    background: #e3efff;
  }
`
export const Name = styled.div``
export const Value = styled.div``
