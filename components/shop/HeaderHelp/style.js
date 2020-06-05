import styled from 'react-emotion'

export const Wrap = styled.div`
  width: 100%;
  min-width: 1150px;
  height: 60px;
  background: ${props => props.bg || `#2C5C9F`};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 991;
`
export const Layout = styled.div`
  width: 1150px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const LeftSide = styled.div`
  display: flex;
  align-items: center;
`

export const LogoWrap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const Center = styled.h1`
  display: flex;
  align-items: center;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  font-size: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #ffffff;
`

export const RightSide = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  text-decoration-line: underline;
  color: #ffffff;
`
