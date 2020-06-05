import styled from 'react-emotion';

export const Wrap = styled.div``
export const Text = styled.div`
  font-family: Open Sans;
  font-weight: ${props => props.fw || '600'};
  font-size: ${props => props.fs || '16px'};
  color: ${props => props.color || '#282F36'};
  margin-bottom: ${props => props.mb};
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeef;
  padding-bottom: 20px;
  margin-bottom: 20px
`
export const Block = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  & > svg {
    margin-right: 30px
  }
`
export const TextBlock = styled.div``