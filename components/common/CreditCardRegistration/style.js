import styled from 'react-emotion';

export const Wrap = styled.div`
  margin-top: 10px;
  background: #fff
`
export const Inner = styled.div`
  width: 1150px;
  margin: auto;
  padding-top: 40px;
  padding-bottom: 40px
`
export const Text = styled.div`
  font-family: Open Sans;
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  color: ${props => props.color};
  margin-bottom: ${props => props.mb};
  padding-bottom: ${props => props.pb};
  padding-top: ${props => props.pt};
`