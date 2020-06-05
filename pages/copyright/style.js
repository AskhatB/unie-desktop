import styled from 'react-emotion'

export const Wrap = styled.div`
  background: #fff;
`
export const Wrapper = styled.div`
  width: 1150px;
  margin: auto;
  padding: 30px 0;
`
export const Text = styled.div`
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  margin-bottom: ${props => props.mb};
  text-align: ${props => props.ta};
  margin-top: ${props => props.mt}
`
export const ListText = styled.li`
  font-size: 14px;
  margin-bottom: 5px
`