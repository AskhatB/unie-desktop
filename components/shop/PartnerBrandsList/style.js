import styled from 'react-emotion'

export const Wrap = styled.div`
  background: #fff;
  border-radius: 10px;
  margin-top: 30px;
  padding-bottom: 30px;
  box-sizing: border-box;
  padding-left: 35px;
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
  padding: 30px 0;
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
  width: 50%;
  height: 100%;
  box-shadow: 1px 0 0 0 #dcddde;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const ControlRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const Item = styled.div`
  width: 150px !important;
  height: 80px;
  padding: 15px;

  border-radius: 10px;
  cursor: pointer;
  border: 2px solid #eee;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
