import styled from 'react-emotion'

export const Wrap = styled.div`
  justify-content: space-around;
  display: flex;
  flex-flow: row wrap;
  width: 1150px;
  margin: 0 auto 50px
`
export const Block = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #eeeeef;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: 0px 5px 20px rgba(40, 47, 54, 0.05);
  }
`
export const Img = styled.div`
  margin-bottom: 10px
`
export const Name = styled.span`
  font-family: Open Sans;
  font-size: 16px;
  text-align: center;
  color: #53585E;
`