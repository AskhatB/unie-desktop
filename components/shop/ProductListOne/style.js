import styled from 'react-emotion'

export const Wrap = styled.div`
  border-radius: 10px;
  margin-top: 30px;
  padding-bottom: 30px;
  position: relative;
  &:hover {
    & span {
      opacity: 1;
    }
  }
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
  margin-bottom: 15px;
  box-sizing: border-box;
  font-weight: bold;
  margin-left: 12px;
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
export const ControlLeft = styled.span`
  display: block;
  opacity: 0;
  width: 42px;
  height: 42px;
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
`
export const ControlRight = styled.span`
  display: block;
  opacity: 0;
  transition: opacity 0.3s;
  width: 42px;
  height: 42px;
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
`
