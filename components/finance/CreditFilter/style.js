import styled from 'react-emotion';

export const Wrap = styled.div`
  background: #fff;
  margin-bottom: 10px
`
export const Wrapper = styled.div`
  width: 1150px;
  margin: auto
`
export const Title = styled.h1`
  font-size: 30px;
  color: #282F36;
  padding: 0;
  margin: 0 0 20px 0;
  font-weight: 600
`
export const InputWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 30px
`
export const Block = styled.div`
  width: ${props => props.width};
  margin-right: 15px;
`
export const Text = styled.div`
  font-size: ${props => props.fs || '16px'};
  color: ${props => props.color || '#282F36'};
  font-weight: ${props => props.fw};
  margin-bottom: ${props => props.mb || '5px'}
`