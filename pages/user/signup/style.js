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

export const UserBlock = styled.div`
  width: 360px;
  margin-top: 15px;
`

export const ControlBlock = styled.div`
  margin-top: 30px;
  border-bottom: 1px solid #dfe0e1;
  padding-bottom: 30px;
  box-sizing: border-box;
`

export const Heading = styled.div`
  font-family: Roboto Slab;
  font-weight: bold;
  font-size: 20px;
  color: #282f36;
  margin-left: 30px;
`

export const ToCreate = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 14px;
  margin-top: 20px;
`
export const ToCreateLeft = styled.div`
  color: #282f36;
  font-weight: 600;
`
export const ToCreateRight = styled.a`
  display: block;
  color: #2c5c9f;
  font-weight: 600;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
