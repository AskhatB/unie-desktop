import styled from 'react-emotion';

export const Wrap = styled.div`
  background: #fff;
  box-sizing: border-box;
  padding: 40px 0 30px;
  margin-bottom: 10px;
`
export const Wrapper = styled.div`
  width: 1150px;
  margin: auto
`
export const Text = styled.div`
  font-family: Open Sans;
  font-weight: ${props => props.fw};
  font-size: ${props => props.fs};
  color: ${props => props.color};
  margin-bottom: ${props => props.mb};
  margin-top: ${props => props.mt};
`