import styled from 'react-emotion';

export const Wrap = styled.div`
  background: #fff;
  box-sizing: border-box;
  padding: 30px 0;
  margin-bottom: 10px
`
export const Wrapper = styled.div`
  width: 1150px;
  margin: auto;
  & > svg {
    margin-bottom: 20px
  }
`
export const Text = styled.div`
  font-family: Open Sans;
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  color: #282F36;
  margin-bottom: ${props => props.mb};
`
export const ImgBlock = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #eeeeef;
  padding-top: 20px;
  justify-content: space-between;
  margin-bottom: 60px
`
export const Img = styled.img`
  height: 25px
`