import styled from 'react-emotion';

export const Wrap = styled.div`
  background: #fff;
  box-sizing: border-box;
  padding: 20px 0 30px;
  margin-bottom: 10px
`
export const Wrapper = styled.div`
  width: 1150px;
  margin: auto
`
export const LoanInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px
`
export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #282F36;
  margin: 0;
  padding: 0;
  width: 60%
`
export const Text = styled.div`
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  margin-bottom: ${props => props.mb};
  color: ${props => props.color};
`
export const Img = styled.img`
  height: 40px;
`
export const InputsBlock = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`
export const Block = styled.div`
  width: 40%
`