import styled from 'react-emotion';

export const Main = styled.div`
  box-sizing: border-box;
`
export const Wrap = styled.div`
  width: 98%;
  border: 1px solid #eeeeef;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
  height: 270px;
  position: relative
`
export const Img = styled.img`
  height: 30px;
  margin-bottom: 10px
`
export const Text = styled.div`
  font-family: Open Sans;
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  color: ${props => props.color};
  margin-bottom: ${props => props.mb}
`
export const CreditConditions = styled.div`
  display: flex;
  justify-content: space-between
`
export const ConditionBlock = styled.div`
  padding-right: 20px
` 
export const Button = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50px;
  border-top: 1px dashed #eeeeef;
  right: 0;
  color: #77BEFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer
`