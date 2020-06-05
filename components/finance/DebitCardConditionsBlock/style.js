import styled from 'react-emotion'

export const Wrap = styled.div``
export const TopBlock = styled.div`
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0 20px;
  margin-bottom: 30px;
`
export const TopBlockInfo = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 15px;
  & > svg {
    margin-right: 5px;
  }
`

export const TopBlockContent = styled.div`
  font-family: Open Sans;
  display: flex;
  flex-direction: column;
`

export const Text = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  font-size: 14px;
  color: #282f36;
  opacity: 0.5;
  margin-right: 5px;
`
export const Info = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
  font-size: 16px;
  color: #282f36;
`
export const BottomBlock = styled.div``
export const Title = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  font-size: 18px;
  color: #282f36;
  margin-bottom: 10px;
`
export const Description = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 28px;
  font-size: 18px;
  color: #282f36;
  margin-bottom: 30px;
`
