import styled from 'react-emotion'

export const Wrap = styled.div`
  display: flex;
  margin-bottom: 30px;
`
export const Text = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  width: ${props => props.width || 'auto'};
  font-size: 14px;
  color: #282f36;
  opacity: 0.5;
  margin-right: 40px;
`
export const DocumentList = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  font-size: 18px;
  color: #282f36;
  margin-bottom: 10px;
`
