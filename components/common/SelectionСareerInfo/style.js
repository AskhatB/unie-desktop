import styled from 'react-emotion';

export const Wrap = styled.div`
  background: #fff;
  box-sizing: border-box;
  padding: 0 0 30px;
`
export const Wrapper = styled.div`
  width: 1150px;
  margin: auto
`
export const Text = styled.div`
  font-family: Open Sans;
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  color: #282F36;
  margin-bottom: ${props => props.mb};
  margin-top: ${props => props.mt};
`
export const Select = styled.div``
export const InputWrapper = styled.div`
  margin-bottom: 10px
`