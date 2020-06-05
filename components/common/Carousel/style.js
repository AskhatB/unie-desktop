import styled from 'react-emotion';

export const Wrap = styled.div`
  background: #fff;
  margin-bottom: 50px;;
`
export const Wrapper = styled.div`
  width: 1150px;
  margin: auto;
`
export const Slider = styled.div`
  position: relative;
  height: 400px;
`
export const Img = styled.img`
  width: 100%;
  position: absolute;
  z-index: 3;
  &:nth-child(2) {
    top: 20px;
    width: 98%;
    left: calc(50% - 49%);
    opacity: 0.8;
    z-index: 2;
  }
  &:nth-child(3) {
    top: 40px;
    width: 96%;
    left: calc(50% - 48%);
    opacity: 0.5;
    z-index: 1;
  }
`