import styled from 'react-emotion'

export const Wrap = styled.div`
  background: url(https://unie-assets.ams3.digitaloceanspaces.com/store/main/iphone_xs_banner.jpg)
    no-repeat;
  width: 100%;
  height: 378px;
  background-size: contain;
  border-radius: 10px;
  margin-top: 30px;
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
  transform: translate(0, -50%);
`
