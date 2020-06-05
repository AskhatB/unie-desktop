import styled from 'react-emotion';

export const Text = styled.div`
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  color: ${props => props.color};
  margin-bottom: ${props => props.mb};
  font-family: Open Sans;
`
export const Block = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px
`
export const Square = styled.div`
  width: 5px;
  height: 5px;
  background: #77BEFF;
  box-shadow: 2px 1px 10px rgba(109, 139, 191, 0.05);
  margin-right: 10px;
`