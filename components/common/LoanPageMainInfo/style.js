import styled from 'react-emotion';

export const Wrap = styled.div`
  background: #fff;
  margin-bottom: 10px
`
export const Wrapper = styled.div`
  width: 1150px;
  margin: auto;
  padding-bottom: 30px
`
export const InfoBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px
`
export const Title = styled.h1`
  font-family: Open Sans;
  font-weight: bold;
  font-size: 20px;
  color: #282F36;
  margin: 0;
  padding: 0 0 10px 0
`
export const Description = styled.div`
  color: #282F36;
  & > * {
    font-size: 14px;
    margin: 10px 0
  }
`
export const Text = styled.div`
  width: 60%
`
export const Img = styled.img`
  width: 140px;
`