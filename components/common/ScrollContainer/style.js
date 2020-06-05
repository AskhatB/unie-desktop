import styled from 'react-emotion'

export const Container = styled.div`
  display: ${props => props.display || 'flex'};
  align-items: center;
  height: 40px;
  width: 355px;
  border: 1px solid #dadada;
  border-radius: 5px;
`

export const Wrap = styled.div`
  box-sizing: border-box;
  margin-bottom: 30px;
`
