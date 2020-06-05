import styled, { keyframes } from 'react-emotion';

const lds_double_ring = keyframes` 
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`
export const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  & > svg {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    animation: ${lds_double_ring} 1s linear infinite;
  }
`
export const Text = styled.div`
  font-family: 'LatoWeb', sans-serif;
  font-size: 15px;
  color: #3F3356;
`