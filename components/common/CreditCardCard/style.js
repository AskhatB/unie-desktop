import styled from 'react-emotion';

export const Wrap = styled.div`
  border: 1px solid #eeeeef;
  border-radius: 5px;
  box-shadow: 0px 5px 20px rgba(40, 47, 54, 0.05);
  box-sizing: border-box;
  padding: 20px 40px;
  margin-bottom: 10px;
  position: relative
`
export const Img = styled.img`
  height: 40px;
`
export const Title = styled.div`
  font-family: Open Sans;
  font-weight: 600;
  font-size: 20px;
  color: #282F36;
  margin-botttom: 12px;
`
export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
export const Block = styled.div`
  margin-right: 40px;
`
export const Text = styled.div`
  font-family: Open Sans;
  font-size: ${props => props.fs};
  color: ${props => props.color};
  font-weight: ${props => props.fw};
  margin-bottom: ${props => props.mb};
`
export const ButtonWrap = styled.div`
  display: flex
`
export const CardImg = styled.img`
  height: 130px;
  position: absolute;
  right: 40px;
  top: calc(50% - 65px)
`