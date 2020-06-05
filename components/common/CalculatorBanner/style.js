import styled from 'react-emotion';

export const Wrap = styled.div`
  border: 1px solid #eeeeef;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0 0 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`
export const TextBlock = styled.div``
export const Text = styled.div`
  font-size: ${props => props.fs || '18px'};
  font-weight: ${props => props.fw || 'bold'};
  margin-bottom: ${props => props.mb};
`
export const Img = styled.img`
  height: 193px;
`