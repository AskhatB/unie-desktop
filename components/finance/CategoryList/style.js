import styled from 'react-emotion'

export const Wrap = styled.div`
  border-top: 1px solid rgba(40, 47, 54, 0.15);
  width: 25%;
  padding-top: 25px;
  background: #fff;
  border-bottom-left-radius: 7px;
`
export const Text = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  color: rgba(40, 47, 54, 0.8);
  padding-left: 20px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  & > svg {
    margin-right: 10px;
  }
  &:hover {
    background: #77BEFF;;
    opacity: 0.5;
  }
`
