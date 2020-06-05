import styled from 'react-emotion';

export const Wrap = styled.div`
  width: 1150px;
  margin: 50px auto 20px;
`
export const TopStuff = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px
` 
export const Text = styled.div`
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  color: ${props => props.color};
  font-family: Open Sans;
  margin-bottom: ${props => props.mb};
  cursor: ${props => props.cursor}
`
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  font-family: Open Sans;
`