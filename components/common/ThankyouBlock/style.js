import styled from 'react-emotion';

export const Wrap = styled.div`
  background: #fff;
  box-sizing: border-box;
  padding: 40px 0 30px;
  margin-bottom: 10px
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
  width: ${props => props.width};
`
export const TextBlock = styled.div`
  display: flex;
  margin-bottom: ${props => props.mb || '10px'}
`