import styled from 'react-emotion'

export const Wrap = styled.div`
  display: flex;
  flex-flow: row wrap;
`
export const Block = styled.div`
  width: 300px;
  margin-bottom: 30px;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
`
export const Name = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 5px;
`
export const InputWrap = styled.div`
  position: relative;
  width: 260px;
  height: 40px;
  & > input {
    width: 100%;
    height: 40px;
    border: 1px solid #dfe0e1;
    position: relative;
    border-radius: 7px;
    box-sizing: border-box;
    padding: 10px;
    font-size: 14px;
    color: rgba(40, 47, 54, 0.5);
    outline: none;
  }
`
