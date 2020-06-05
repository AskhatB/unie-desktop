import styled from 'react-emotion'

export const Wrap = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 45px 0 20px 190px;
`
export const Inner = styled.div`
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(40, 47, 54, 0.15);
  display: flex;
  width: 700px
  padding-bottom: 30px
`
export const LeftSide = styled.div`
  width: 400px;
  margin-right: 40px;
`
export const RightSide = styled.div`
  width: 264px;
  height: 215px;
  margin-top: 70px;
  background: rgba(40, 47, 54, 0.04);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px;
`
export const Title = styled.div`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: bold;
  line-height: 25px;
  font-size: 20px;
  color: #282f36;
  margin-bottom: 20px;
`
export const Info = styled.div`
  margin-bottom: 20px;
  & > input {
    width: 390px;
    height: 40px;
    border-radius: 7px;
  }
  & > textarea {
    max-width: 390px;
    min-width: 390px;
    min-height: 38px;
    border: 1px solid rgba(40, 47, 54, 0.15);
    border-radius: 7px;
    outline: none;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 14px;
    color: #282f36;
    box-sizing: border-box;
    padding: 8px 10px;
  }
`
export const Name = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  font-size: 14px;
  color: #282f36;
  margin-bottom: 5px;
`
export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
  & > input {
    margin-right: 5px;
  }
`
export const Light = styled.div`
  font-family: Open Sans;
  font-style: italic;
  font-weight: normal;
  line-height: 15px;
  font-size: 12px;
  color: #000000;
  opacity: 0.2;
`
export const DeliveryInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`
export const Text = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: 16px;
  color: #282f36;
  width: 190px;
`
export const Time = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: 14px;
  text-align: right;
  color: #ffa34d;
`
export const Amount = styled.div`
  width: 86px;
  height: 23px;
  background: #ff4f52;
  border-radius: 2px;
  display: flex;
  align-items: center;
  & > div {
    width: 33%;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }
`
export const Main = styled.div`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: bold;
  line-height: 25px;
  font-size: 16px;
  color: #282f36;
  margin-bottom: 13px;
`
export const SameText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  & > div {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 14px;
    color: #282f36;
  }
  &:last-child {
    border-top: 1px solid rgba(40, 47, 54, 0.08);
    border-bottom: 1px solid rgba(40, 47, 54, 0.08);
    padding: 10px 0;
  }
`
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  & > div {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    line-height: 20px;
    font-size: 14px;
    color: #282f36;
  }
`
export const Btns = styled.div`
  display: flex;
  & > button {
    margin-right: 20px;
  }
`
