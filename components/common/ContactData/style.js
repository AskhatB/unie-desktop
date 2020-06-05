import styled from 'react-emotion';

export const Wrap = styled.div`
  width: 1150px;
  margin: auto
`
export const Text = styled.div`
  color: ${props => props.color};
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  margin-bottom: ${props => props.mb};
`