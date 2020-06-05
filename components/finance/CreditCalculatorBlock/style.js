import styled from 'react-emotion'

export const Wrap = styled.div`
  background: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 30px 80px;
  margin-bottom: 30px;
`
export const Title = styled.div`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  font-size: 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #282f36;
  margin-bottom: 10px;
`
export const Description = styled.div`
  font-family: Open Sans;
  font-size: 14px;
  color: rgb(40, 47, 54);
  margin-bottom: 50px;
`
export const InputInner = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 10px;
`
export const Block = styled.div`
  margin-right: 40px;
  margin-bottom: 30px;
`
export const Text = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 5px;
`
export const InputWrap = styled.div`
  position: relative;
  & > input {
    width: 260px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid rgba(40, 47, 54, 0.15);
    padding: 0 15px;
    color: rgba(40, 47, 54, 0.3);
    font-size: 14px;
    outline: none;
    color: #52585c;
  }
`
