import styled from 'react-emotion'

export const Input = styled.div`
  width: 35%;
  height: 40px;
  border: 1px solid rgba(40, 47, 54, 0.15);
  border-radius: 7px;
  margin: 0px auto;
  box-sizing: border-box;
  padding: 2px 15px;
  display: flex;
  align-items: center;
  background: #ffffff;
  & > input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 16px;
    color: rgba(40, 47, 54, 0.5);
    background: #ffffff;
  }
  & > svg {
    cursor: pointer;
  }
`
