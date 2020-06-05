import styled from 'react-emotion';

export const Wrap = styled.div`
  margin-bottom: 10px
`
export const LogoBlock = styled.div`
  width: 1150px;
  margin: auto
`
export const Img = styled.img`
  height: 125px
`
export const InfoBlock = styled.div`
  background: #fff
`
export const InfoBlockInner = styled.div`
  width: 1150px;
  margin: auto;
  box-sizing: border-box;
  padding: 30px 0
`
export const Text = styled.div`
  font-family: Open Sans;
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  color: ${props => props.color};
  margin-bottom: ${props => props.mb};
  width: ${props => props.width};
`
export const ContactInfo = styled.div`
  display: flex;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eeeeef
`
export const Block = styled.div`
  margin-right: 150px;
  &:last-child {
    margin-right: 0
  }
`