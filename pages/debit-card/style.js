import styled from 'react-emotion';

export const Wrap = styled.div`
  background: #fff;
  box-sizing: border-box;
  padding: 10px 0 30px;
`
export const Wrapper = styled.div`
  width: 1150px;
  margin: auto;
`
export const CardBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center
`
export const Title = styled.h1`
  font-family: Open Sans;
  font-size: 30px;
  font-weight: bold;
  color: #282F36;
  margin-bottom: 15px;
`
export const Img = styled.img`
  height: 240px
`
export const CardInfo = styled.div``
export const Text = styled.div`
  font-family: Open Sans;
  font-size: ${props => props.fs || '14px'};
  font-weight: ${props => props.fw};
  margin-bottom: ${props => props.mb || '10px'};
  color: ${props => props.color || '#282F36'}
`
export const AdvantagesList = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px
`
export const Square = styled.div`
  width: 5px;
  height: 5px;
  background: #77BEFF;
  margin-right: 10px
`