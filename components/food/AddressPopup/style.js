import styled from 'react-emotion'

export const Wrap = styled.div`
  position: relative;
`
export const Bg = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
`
export const Modal = styled.div`
  width: 870px;
  background: #fff;
  box-sizing: border-box;
  padding: 60px 30px 15px;
  position: fixed;
  z-index: 1001;
  border-radius: 10px;
  left: calc(50% - 435px);
  & > span {
    position: absolute;
    top: 23px;
    right: 23px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`
export const Title = styled.div`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: bold;
  line-height: 25px;
  font-size: 20px;
  color: #282f36;
  margin-bottom: 30px;
`
export const InputLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const Yandex = styled.div`
  width: 100%;
  height: 393px;
  & > div {
    width: 100% !important;
    height: 100% !important;
  }
  & .ymaps-2-1-72-map {
    width: 100% !important;
    height: 100% !important;
    & .ymaps8-1-72-map {
      width: 100% !important;
      height: 100% !important;
    }
  }
`
