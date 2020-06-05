import styled from 'react-emotion'

export const Wrap = styled.div`
  width: 1150px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`
export const License = styled.div`
  font-size: 12px;
  color: #93979B;
  width: 1150px;
  margin: 0 auto 16px;
  box-sizing: border-box;
  padding: 0 0 20px 0;
  border-bottom: 1px solid #eeeeef
`
export const List = styled.div`
  display: flex;
  align-items: center;
  width: 1150px;
  margin: auto;
  padding-bottom: 16px;
`
export const Text = styled.div`
  font-size: 14px;
  color: #93979B;
  margin-right: 30px;
  text-decoration: ${props => props.td};
  cursor: ${props => props.cursor};
  & > span {
    text-decoration: underline;
    cursor: pointer;
  }
`