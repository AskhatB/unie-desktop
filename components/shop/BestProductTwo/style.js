import styled from 'react-emotion'

export const Wrap = styled.div`
  background: url(${props => props.bg}) no-repeat;
  width: 100%;
  height: 473px;
  background-size: cover;
  box-sizing: border-box;
  padding: 0 120px;
  position: relative;
`

export const Heading = styled.div`
  font-family: Roboto Slab;
  font-weight: bold;
  font-size: 36px;
  color: #282f36;
`
export const Subheading = styled.div`
  font-family: Roboto Slab;
  font-weight: bold;
  font-size: 26px;
  color: #2c5c9f;
`

export const InfoBlock = styled.div`
  position: absolute;
  top: 50%;
  width: 1150px;
  margin: 0 auto;
  transform: translate(0, -50%);
`
