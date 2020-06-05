import styled from 'react-emotion';

export const Wrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #F2F2F2;
  box-shadow: 0px 5px 20px rgba(40, 47, 54, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  left: ${props => props.left || '0'};
  right: ${props => props.right || '0'};
  top: ${props => props.top || '0'};
  bottom: ${props => props.bottom || '0'};
  z-index: 200;
  background: #fff;
  transform: ${props => props.transform && 'scale(-1, 1)'};
`