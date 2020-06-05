import styled from 'react-emotion'

export const Label = styled.label`
  width: 100%;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 14px;
  height: 20px;
  display: flex;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 90;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &:hover input ~ div {
    background-color: #fff;
  }

  & input:checked ~ div {
    background-color: #fff;
  }

  & input:checked ~ div:after {
    display: block;
  }
`

export const Input = styled.input``

export const Checkmark = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #77BEFF;
  &:after {
    content: '';
    display: none;
    position: absolute;
    left: 3px;
    top: 3px;
    width: 12px;
    height: 12px;
    background: #77BEFF;
    border-radius: 50%;
  }
`
