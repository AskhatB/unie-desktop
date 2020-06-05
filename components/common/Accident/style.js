import styled from 'react-emotion';

export const Wrap = styled.div``
export const Text = styled.div`
  font-size: 16px;
  color: #282F36;
  margin-bottom: ${props => props.mb || '5px'}
`
export const Btn = styled.div`
  margin-bottom: 20px;
  &:last-child {
    padding-bottom: 30px
  }
`
export const RadioWrap = styled.div`
  margin-bottom: 20px;
    &:last-child{
      margin-bottom: 40px
    }
`