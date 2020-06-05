import styled from 'react-emotion'

export const Wrap = styled.div`
  display: flex;
  height: 37px;
  box-sizingL border-box;
  align-items: center
`
export const Block = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const Cur = styled.div`
  display: flex;
  align-items: center;
  padding-right: 25px;
  & > span {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 14px;
    text-align: center;
    color: #282f36;
  }
`
export const Name = styled.div`
  margin-right: 15px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  font-size: 14px;
  color: #282f36;
`