import styled from 'react-emotion';

export const Wrap = styled.div`
  display: flex;
  flex-flow: column
`
export const InputWrap = styled.div`
  display: flex;
  height: 50px; 
  align-items: center;
  margin-bottom: 10px;
  position: relative;
  & > input {
    width: 380px;
    height: 100%;
    border: none;
    outline: none;
    border: ${props => props.valid ? '1px solid #DFE0E1' : '1px solid #F36969'};
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 16px;
    font-size: 16px;
    font-family: 'LatoWeb', sans-serif;
    margin-right: 20px;
  }
  & > span {
    position: absolute;
    font-size: 12px;
    bottom: 3px;
    left: 125px;
    color: #F36969;
    display: ${props => props.valid ? 'none' : 'block'}
  }
`
export const Text = styled.div`
  font-size: 14px;
  color: #282F36;
  font-family: Open Sans
`
export const InputWithNumber = styled.div`
  position: relative;
  width: 380px;
  height: 50px;
  margin-bottom: 10px;
  & > input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border: ${props => props.valid ? '1px solid #DFE0E1' : '1px solid #F36969'};
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 50px;
    font-size: 16px;
    font-family: 'LatoWeb', sans-serif;
  }
  & > span {
    position: absolute;
    font-size: 12px;
    bottom: 5px;
    right: 10px;
    color: #F36969;
    display: ${props => props.valid ? 'none' : 'block'}
  }
`
export const Numb = styled.div`
  position: absolute;
  left: 16px;
  top: calc(50px - 75%);
  font-weight: 600;
  font-size: 16px;
`
export const MailInputWrap = styled.div`
  position: relative;
  width: 380px;
  height: 50px;
  margin-bottom: 30px;
  & > input {
    border: ${props => props.valid ? '1px solid #DFE0E1' : '1px solid #F36969'};
  }
  & > span {
    position: absolute;
    font-size: 12px;
    bottom: 5px;
    right: 10px;
    color: #F36969;
    display: ${props => props.valid ? 'none' : 'block'}
  }
`