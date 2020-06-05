import styled from 'react-emotion';

export const Wrap = styled.div`
  background: #fff;
  box-sizing: border-box;
  padding: 10px 0 30px;
  margin-bottom: 10px
`
export const Wrapper = styled.div`
  width: 1150px;
  margin: auto
`
export const Title = styled.h1`
  font-family: Open Sans;
  font-weight: bold;
  font-size: 24px;
  color: #282F36;
  width: 70%
`
export const InfoBlock = styled.div`
  display: flex;
`
export const Block = styled.div`
  width: 260px
`
export const Text = styled.div`
  font-family: Open Sans;
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  color: ${props => props.color};
  margin-bottom: ${props => props.mb}
`