import styled from 'react-emotion';

export const Wrap = styled.div``
export const Text = styled.div`
  color: #282F36;
  font-size: 16px;
  margin-bottom: ${props => props.mb || '10px'}
`
export const RadioWrap = styled.div`
  margin-bottom: 20px;
  &:last-child{
    margin-bottom: 40px
  }
`
export const AddToTourist = styled.div`
  color: #77BEFF;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 30px
`
export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px
`
export const Btn = styled.div`
  margin-bottom: 15px;
  &:last-child{
    padding-bottom: 30px
  }
`