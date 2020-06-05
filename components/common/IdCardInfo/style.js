import styled from 'react-emotion';

export const Wrap = styled.div`
  margin-bottom: 20px;
`
export const Text = styled.div`
  font-family: 'LatoWeb', sans-serif;
  font-size: 16px;
  color: #282F36;
  margin-bottom: 10px;
`
export const InputWrap = styled.div`
  width: ${props => props.width || '380px'};
  margin-bottom: 10px;
  & > input {
    width: 100%;
    height: 50px;
    font-family: 'LatoWeb', sans-serif;
    font-size: 14px;
    color: #282F36;
    outline: none;
    box-sizing: border-box;
    padding: 0 15px;
    border: 1px solid #DFE0E1;
    border-radius: 5px;
  }
`
export const InputDateWrap = styled.div`
  width: ${props => props.width || '380px'};
  margin-bottom: 10px;
  & > input {
    width: 100%;
    height: 50px;
    font-family: 'LatoWeb', sans-serif;
    font-size: 14px;
    color: #282F36;
    outline: none;
    box-sizing: border-box;
    padding: 0 15px;
    border: ${props => props.valid ? '1px solid #DFE0E1' : '1px solid #F36969'};
    border-radius: 5px;
  }
`
export const DateInfo = styled.div`
  width: 380px;
  display: flex;
  justify-content: space-between;
`