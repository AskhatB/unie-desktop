import styled from 'react-emotion';

export const Wrap = styled.div`
  background: #fff;
`
export const Wrapper = styled.div`
  width: 1150px;
  margin: auto;
  padding: 30px 0;
`
export const Text = styled.div`
  font-size: ${props => props.fs || '14px'};
  font-weight: ${props => props.fw};
  margin-bottom: ${props => props.mb || '10px'};
  text-align: ${props => props.ta};
  margin-top: ${props => props.mt}
`