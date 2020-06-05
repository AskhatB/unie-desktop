import styled from 'react-emotion'

export const Wrap = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding-left: 30px;
  color: #282f36;
  font-size: 14px;
`

export const BurgerIconWrap = styled.div`
  position: absolute;
  left: 15px;
  top: 13px;
`

export const SearchBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 70px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #dcddde;
  cursor: pointer;
`
