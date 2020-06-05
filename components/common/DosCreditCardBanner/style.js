import styled from 'react-emotion';

export const Wrap = styled.div`
  background: #fff;
  box-sizing: border-box;
  padding: 20px 0 30px;
`
export const Wrapper = styled.div`
  width: 1150px;
  margin: auto;
  display: flex;
  justify-content: space-between
`
export const TextBlock = styled.div``
export const Text = styled.div`
  font-family: Open Sans;
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  color: ${props => props.color};
  margin-bottom: ${props => props.mb};
`
export const Img = styled.img`
  height: 260px
`
export const AdvantageList = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.mb || '10px'}
`
export const Square = styled.div`
  width: 5px;
  height: 5px;
  margin-right: 10px;
  background: #77BEFF
`