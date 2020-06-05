import styled from 'react-emotion'

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`
export const Wrap = styled.div`
  width: 263px;
  height: 180px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & > img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    transition: transform 0.2s;
  }
  &:hover > img {
    transform: scale(1.2);
    transition: transform 0.2s;
  }
`
export const Name = styled.div`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: bold;
  line-height: 40px;
  font-size: 30px;
  text-align: center;
  color: #ffffff;
  position: relative;
  z-index: 2;
`
