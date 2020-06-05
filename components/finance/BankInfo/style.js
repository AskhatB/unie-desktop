import styled from 'react-emotion'

export const Wrap = styled.div`
  background: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 30px 0;
  height: max-content;
  overflow: scroll;
`
export const Name = styled.div`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: bold;
  line-height: 25px;
  font-size: 22px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #282f36;
  box-sizing: border-box;
  padding: 0 60px;
`
export const Img = styled.div`
  width: 360px;
  margin: 30px auto 15px;
  & > img {
    width: 100%;
  }
`
export const Description = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 16px;
  color: #282f36;
  box-sizing: border-box;
  padding: 0 60px;
`
