import styled from 'react-emotion';

export const Wrap = styled.div``

export const Text = styled.div`
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  color: ${props => props.color};
  font-family: Open Sans;
  margin-bottom: ${props => props.mb};
  cursor: ${props => props.cursor}
`
export const Icons = styled.div`
  display: flex;
  & > a {
    margin-right: 20px
  }
`