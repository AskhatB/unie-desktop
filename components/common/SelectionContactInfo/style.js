import styled from 'react-emotion';

export const Wrap = styled.div`
  background: #fff;
  box-sizing: border-box;
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
  margin-bottom: ${props => props.mb};
  margin-top: ${props => props.mt};
`