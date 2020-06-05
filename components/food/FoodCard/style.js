import styled from 'react-emotion'

export const Wrap = styled.div`
  background: #fff;
  width: 340px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0px 2px 9px rgba(174, 172, 172, 0.15);
  padding: 0 0 15px;
  position: relative;
`
export const Img = styled.div`
  width: 100%;
  height: 135px;
  overflow: hidden;
  position: relative;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin-bottom: 10px;
  & > img {
    width: 100%;
    object-fit: contain;
  }
`
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 15px;
  margin-bottom: 15px;
`
export const Name = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: 16px;
  color: #282f36;
`
export const Price = styled.div`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  font-size: 14px;
  text-align: right;
  color: #ffa34d;
`
export const Description = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 12px;
  color: rgba(40, 47, 54, 0.3);
  box-sizing: border-box;
  padding: 0 15px;
`
export const AddBtn = styled.div`
  background: #ff4f52;
  border-radius: 2px;
  color: #fff;
  width: 86px;
  height: 23px;
  position: absolute;
  z-index: 2;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 14px;
  text-align: center;
  right: 12px;
  top: 15px;
  cursor: pointer;
`
