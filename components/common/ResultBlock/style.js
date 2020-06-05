import styled from 'react-emotion';

export const Wrap = styled.div`
  background: #fff;
  box-sizing: border-box;
  padding: 20px 0 30px
`
export const Wrapper = styled.div`
  width: 1150px;
  margin: auto
`
export const Text = styled.div`
  font-family: Open Sans;
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  color: ${props => props.color};
  margin-bottom: ${props => props.mb}
`
export const InfoBlock = styled.div`
  display: flex;
  margin-bottom: 30px
`
export const Block = styled.div`
  margin-right: 50px
`