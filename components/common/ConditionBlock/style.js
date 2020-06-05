import styled from 'react-emotion';

export const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #eeeeef;
  padding-bottom: 15px;
  margin-bottom: 20px
`
export const RateInfo = styled.div`
  width: ${props => props.width}
`
export const Text = styled.div`
  font-size: ${props => props.fs || 'Номинальная ставка'};
  font-weight: ${props => props.fw || '600'};
  color: ${props => props.color || '#282F36'};
  margin-bottom: ${props => props.mb || '6px'};
`