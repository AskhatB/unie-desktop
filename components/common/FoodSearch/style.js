import styled from 'react-emotion'

export const SearchBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`
export const SearchInput = styled.div`
  width: 70%;
  height: 55px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  & > input {
    width: 95%;
    height: 100%;
    border: none;
  }
  & > svg {
    border-left: 1px solid rgba(40, 47, 54, 0.15);
    height: 55px;
    width: 55px;
    box-sizing: border-box;
    padding: 16px;
    cursor: pointer;
  }
`
