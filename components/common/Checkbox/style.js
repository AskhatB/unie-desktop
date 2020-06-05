import styled from 'react-emotion'

export const Label = styled.label`
  position: relative;
  padding-left: 35px;
  margin-bottom: ${props => props.mb || '12px'};
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
    background-color: ${props => props.color};
  }

  & input:checked ~ div:after {
    display: block;
  }
  & > span {
    text-decoration: underline
  }
`

export const Input = styled.input``

export const Checkmark = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 3px;
  &:after {
    content: '';
    display: none;
    position: absolute;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
