import styled from 'react-emotion'

export const Wrap = styled.a`
  display: flex;
  width: 263px;
  height: 180px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  &:hover > img {
    transform: scale(1.2);
    transition: transform 0.2s;
  }
  & > img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    transition: transform 0.2s;
  }
`
export const Heading = styled.div`
  font-family: Roboto Slab;
  font-weight: bold;
  font-size: 30px;
  color: #fff;
  z-index: 4;
`
export const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`
