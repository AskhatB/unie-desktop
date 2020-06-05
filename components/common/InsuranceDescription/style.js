import styled from 'react-emotion';

export const Wrap = styled.div`
  width: 1150px;
  margin: auto
`
export const Title = styled.h1`
  font-family: Open Sans;
  font-weight: 600;
  font-size: 24px;
  color: #282F36;
  margin: 0;
  padding: 0
`
export const Block = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #eeeeef
`
export const Img = styled.img`
  width: 120px;
  margin-right: 20px
`
export const InfoBlock = styled.div``
export const Text = styled.div`
  color: ${props => props.color};
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  margin-bottom: ${props => props.mb};
  font-family: Open Sans
`