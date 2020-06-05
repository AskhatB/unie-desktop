import styled from 'react-emotion';

export const Wrap = styled.div`
  background: #fff;
  padding-bottom: 30px;
  margin-bottom: 10px;
`
export const Wrapper = styled.div`
  width: 1150px;
  margin: auto;
`
export const Title = styled.h1`
  margin: 0 0 20px 0;
  padding: 0;
  font-family: Open Sans;
  font-weight: 600;
  font-size: 30px;
  color: #282F36;
`
export const Inputs = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`
export const Block = styled.div`
  width: 450px;
`
export const Text = styled.div`
  font-family: Open Sans;
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  color: ${props => props.color};
  margin-bottom: ${props => props.mb};
`