import styled from 'react-emotion';

export const Wrap = styled.div`
  border: 1px solid #eeeeef;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
  width: 49.5%
`
export const Img = styled.img`
  height: 70px
`
export const Text = styled.div`
  font-family: Open Sans;
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  margin-bottom: ${props => props.mb};
  color: ${props => props.color};
  cursor: ${props => props.cursor};
`