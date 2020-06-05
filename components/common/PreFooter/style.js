import styled from 'react-emotion';

export const Wrap = styled.div`
  width: 1150px;
  margin: auto;
  border-bottom: 1px solid #eeeeef;
  padding-bottom: 30px;
  margin-bottom: 30px
`
export const Block = styled.div`
  background: #fff;
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0 20px;
  cursor: pointer;
  margin-bottom: 10px;
`
export const HalfOfPreBlock = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > svg {
    transform: rotate(${props => (props.active ? '180deg' : '0')});
    transition: 0.5s;
  }
`
export const Text = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #282F36;
  font-family: Open Sans;
`
export const Title = styled.h3`
  font-weight: 600;
  font-size: 14px;
  color: #282F36;
  font-family: Open Sans;
`
export const OtherInfo = styled.div`
  font-size: 14px;
  color: #53585E;
  transition: 0.5s;
  max-height: ${props => (props.active ? '5000px' : `0`)};
  overflow: hidden;
  padding-bottom: ${props => (props.active ? '20px' : '0')}
`
export const CreditText = styled.div`
  height: 60px;
  color: #77BEFF;
  border-top: 1px solid #eeeeef;
  display: flex;
  align-items: center
`