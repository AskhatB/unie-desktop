import styled from 'react-emotion';

export const Wrap = styled.div`
  width: 1150px;
  margin: auto;
`
export const Title = styled.h2`
  font-family: Open Sans;
  font-weight: 600;
  font-size: 20px;
  color: #282F36;
  margin-bottom: 10px
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
`
export const InsuranceBlock = styled.div`
  width: 370px;
  height: 195px;
  border: 1px solid #eeeeef;
  box-sizing: border-box;
  padding: 16px;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-right: 10px;
  cursor: pointer;
  &:hover{
    box-shadow: 0px 5px 20px rgba(40, 47, 54, 0.05);
  }
`
export const Img = styled.img`
  height: 80px
`
export const Text = styled.div`
  color: ${props => props.color};
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  margin-bottom: ${props => props.mb};
  font-family: Open Sans;
`