import styled from 'react-emotion';

export const Wrap = styled.div``
export const Text = styled.div`
  font-family: "LatoWeb", sans-serif;
  font-size: 16px;
  color: #282F36;
  margin-bottom: 10px;
`
export const ChangeToOtherCity = styled.div`
  font-family: "LatoWeb", sans-serif;
  font-size: 14px;
  color: #77BEFF;
  margin-bottom: 30px;
  cursor: pointer;
`
export const RadioWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
`
export const Radio = styled.div`
  margin-right: 60px;
`
export const Box = styled.div`
  display: flex;
  margin-bottom: 30px;
  & > span {
    text-decoration: underline;
    cursor: pointer;
    font-size: 14px;
  }
`