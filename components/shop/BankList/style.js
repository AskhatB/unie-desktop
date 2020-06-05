import styled from 'react-emotion'

export const Wrap = styled.a`
  width: 360px !important;
  background: #fff;
  height: 140px;
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
export const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
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
  padding: 50px 12px 10px;
  font-weight: bold;
  box-sizing: border-box;
`
