import styled from 'react-emotion';

export const Wrap = styled.div``
export const Text = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
  color: #282F36
`
export const RadioWrap = styled.div`
  margin-bottom: ${props => props.mb || '20px'}
`
export const Btn = styled.div`
  margin-bottom: 20px;
  &:last-child {
    padding-bottom: 30px
  }
`