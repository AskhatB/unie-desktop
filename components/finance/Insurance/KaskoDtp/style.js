import styled from 'react-emotion'

export const Wrap = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 30px;
`
export const Block = styled.div`
  width: 260px;
  margin-right: 40px;
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
export const InputWrapper = styled.div`
  position: relative;
  width: 260px;
  & > input {
    width: 260px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid rgba(40, 47, 54, 0.15);
    padding: 0 15px;
    color: rgba(40, 47, 54, 0.3);
    font-size: 14px;
    outline: none;
    color: #52585c;
  }
`
