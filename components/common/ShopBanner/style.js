import styled from 'react-emotion';

export const Wrap = styled.div`
  background: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px 20px 10px 0;
  margin-bottom: 20px;
  display: flex;
  border: 1px solid #eeeeef;
  align-items: center;
  & > img {
    width: 130px;
    margin-right: 20px;
  }
`
export const InfoBlock = styled.div`
  width: 250px
`
export const Text = styled.div`
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  color: ${props => props.color};
  font-family: Open Sans;
  margin-bottom: ${props => props.mb};
  cursor: ${props => props.cursor}
`