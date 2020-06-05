import styled from 'react-emotion';

export const Wrap = styled.div`
  padding: 20px 0;
  background: #fff
`
export const Inner = styled.div`
  width: 1150px;
  margin: auto;
  display: flex;
  align-items: center;
`
export const Crumb = styled.div`
  font-family: Open Sans;
  font-size: 14px;
  color: #BEC0C3;
  cursor: pointer;
  display: flex;
  margin: 0 5px;
  &:last-child{
    color: #77BEFF;
    & > div{
      display: none
    }
  }
`
export const Dash = styled.div`
  margin-left: 10px;
`