import styled from 'react-emotion'

export const Text = styled.div`
  position: absolute;
  left: 20px;
  z-index: 120
`
export const Label = styled.label`
  width: 380px;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding-left: 35px;
  cursor: pointer;
  font-size: 14px;
  height: 40px;
  display: flex;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 100;
  border: 1px solid #eeeeef;
  border-radius: 3px;
  box-shadow: 2px 1px 10px rgba(109, 139, 191, 0.05);

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &:hover input ~ div {
  }

  & input:checked ~ div {
    background-color: #fff;
    border: 1.5px solid #77BEFF;
    border-radius: 3px
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
  height: 40px;
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
  &:after {
    content: '';
    display: none;
    position: absolute;
    left: 3px;
    top: 3px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
`
