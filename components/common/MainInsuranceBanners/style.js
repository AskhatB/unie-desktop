import styled from 'react-emotion';

export const Wrap = styled.div`
  width: 1150px;
  margin: 50px auto 0;
`
export const Text = styled.div`
  font-size: ${props => props.fs || '20px'};
  font-weight: ${props => props.fw || '600'};
  font-family: Open Sans;
  margin-bottom: 20px;
  color: ${props => props.color};
  cursor: ${props => props.cursor}
`
export const InsuranceBlocks = styled.div`
  display: flex;
  justify-content: space-between
`
export const TopStuff = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center
`