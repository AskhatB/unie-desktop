import styled from 'react-emotion'

export const Wrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 15px 30px;
  top: 0;
  left: 0;
  transform: translate(0, ${props => (props.active && '0') || '100%'});
  transition: 0.3s;
  overflow: scroll;
  background: #fff;
  z-index: 6000;
`
export const Icon = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer
`
export const Bold = styled.div`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  margin: 45px 0 10px
`
export const Text = styled.div`
  font-size: 15px;
  margin-bottom: 10px
`