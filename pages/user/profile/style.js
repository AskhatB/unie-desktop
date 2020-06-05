import styled from 'react-emotion'

export const Wrap = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  display: flex;
  padding: 50px 100px;
  box-sizing: border-box;
`

export const Left = styled.div`
  width: 50%;
  & > img {
    width: 455px;
    height: 324px;
  }
`
export const Right = styled.div`
  width: 50%;
`

export const Heading = styled.div`
  font-size: 18px;
  font-family: Roboto Slab;
  color: #282f36;
  font-weight: bold;
  text-align: center;
`
