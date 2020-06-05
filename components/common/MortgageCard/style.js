import styled from 'react-emotion';

export const Wrap = styled.div`
  border: 1px solid #eeeeef;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px
`
export const Img = styled.img`
  width: 100px
`
export const MortgageInfo = styled.div``
export const Text = styled.div`
  font-family: Open Sans;
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  color: ${props => props.color};
  margin-bottom: ${props => props.mb};
`
export const InfoBlock = styled.div`
  display: flex;
`
export const Block = styled.div`
  width: 150px
`
export const ButtonWrap = styled.div`
  display: flex;
  flex-flow: column
`