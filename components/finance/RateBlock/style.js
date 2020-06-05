import styled from 'react-emotion'

export const Wrap = styled.div`
  box-sizin: border-box;
  padding: 0 20px;
`
export const Text = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 28px;
  font-size: 18px;
  color: #282f36;
  margin-bottom: 30px;
  & > h1 {
    font-size: 16px;
  }
  & > p {
    font-size: 14px;
  }
`
export const Block = styled.div`
  border: 1px solid rgba(76, 136, 105, 0.4);
  margin-bottom: 30px;
`
export const TopBlock = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 25px;
  height: 50px;
  align-items: center;
`
export const BotBlock = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 25px;
  height: 50px;
  align-items: center;
  background: rgba(76, 136, 105, 0.4);
`
export const BlockText = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  font-size: 14px;
  color: #282f36;
  opacity: 0.5;
`
export const BlockNumb = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  font-size: 18px;
  text-align: right;
  color: #282f36;
`
