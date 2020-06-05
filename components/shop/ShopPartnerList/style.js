import styled from 'react-emotion'

export const Wrap = styled.div`
  border-radius: 10px;
  margin-top: 30px;
  padding-bottom: 30px;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Heading = styled.div`
  font-family: Roboto Slab;
  font-size: 30px;
  color: #282f36;
  padding: 30px 12px 30px;
  font-weight: bold;
  box-sizing: border-box;
`

export const ControlBlock = styled.div`
  border: 1px solid #dcddde;
  margin-right: 30px;
  box-sizing: border-box;
  display: flex;
  border-radius: 5px;
  width: 60px;
  height: 30px;
`
export const ControlLeft = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #2c5c9f;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: -12px;
  z-index: 99;
  margin-top: 10px;
`
export const ControlRight = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #2c5c9f;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: -12px;
  z-index: 99;
  margin-top: 10px;
`
export const Item = styled.div`
  width: 263px !important;
  background: #fff;
  height: 100px;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #f5f5f5;
  margin-left: 12px;
  overflow: hidden;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const Link = styled.a``
