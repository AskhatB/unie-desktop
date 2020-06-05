import styled from 'react-emotion'

export const Wrap = styled.div`
  background: #fff;
  border-radius: 10px;
  margin-bottom: 30px;
`
export const Image = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  & > img {
    width: 100%;
    border-radius: 10px;
  }
`
export const MainInfo = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 15px;
  margin-bottom: 5px;
`
export const Name = styled.div`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: bold;
  line-height: 25px;
  font-size: 22px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #282f36;
`
export const DeliveryInfo = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 15px;
`
export const Block = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
  & > svg {
    margin-right: 5px;
  }
  & > span {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 14px;
    color: #282f36;
  }
`
export const Tags = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 12px;
  color: rgba(40, 47, 54, 0.5);
  box-sizing: border-box;
  padding: 15px;
  & > div {
    margin-right: 5px;
    &:last-child > span {
      display: none;
    }
  }
`
