import styled from 'react-emotion';

export const Wrap = styled.div`
  background: #fff;
  box-sizing: border-box;
  padding: 20px 0;
`
export const Wrapper = styled.div`
  width: 1150px;
  margin: 0 auto
`
export const Title = styled.div`
  font-family: Open Sans;
  font-weight: 600;
  font-size: 16px;
  color: #282F36;
  margin-bottom: 15px;
`
export const InfoBlock = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid #eeeeef;
  margin-bottom: 20px;
`
export const Block = styled.div`
  margin-right: 140px;
`
export const Text = styled.div`
  font-family: Open Sans;
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  color: ${props => props.color};
  margin-bottom: ${props => props.mb};
`
export const ReqBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
export const Square = styled.div`
  width: 5px;
  height: 5px;
  margin-right: 10px;
  background: #77BEFF
`
export const Border = styled.div`
  border-top: 1px solid #eeeeef;
  margin: 20px 0;
`