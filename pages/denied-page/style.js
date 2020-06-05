import styled from 'react-emotion';

export const Wrap = styled.div`
  background: #fff;
  box-sizing: border-box;
  padding: 30px 0;
  margin-bottom: 10px
`
export const Wrapper = styled.div`
  width: 1150px;
  margin: auto;
  & > svg {
    margin-bottom: 50px
  }
`
export const Text = styled.div`
  font-faily: Open Sans;
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  color: #282F36;
  margin-bottom: ${props => props.mb};
`