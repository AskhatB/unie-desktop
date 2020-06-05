import styled from 'react-emotion'

export const Wrap = styled.div`
  display: flex;
  flex-flow: row wrap;
`
export const Block = styled.div`
  width: 300px;
  margin-bottom: 30px;
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
export const Btn = styled.div`
  position: absolute;
  bottom: 30px;
  left: 260px;
`
export const InputInner = styled.div`
  display: flex;
  align-items: center;
  width: 260px;
  justify-content: space-between;
  & > span {
    cursor: pointer;
    width: 35px;
    height: 35px;
  }
`
