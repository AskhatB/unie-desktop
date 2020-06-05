import styled from 'react-emotion';

export const Wrap = styled.div`
  background: #fff;
  padding: 30px 0;  
`
export const Wrapper = styled.div`
  width: 1140px;
  margin: auto
`
export const Text = styled.div`
  font-family: 'LatoWeb', sans-serif;;
  font-weight: ${props => props.fw};
  font-size: ${props => props.fs};
  color: ${props => props.color};
  margin-bottom: ${props => props.mb};
  margin-top: ${props => props.mt};
  text-decoration: ${props => props.td}
`
export const Block = styled.div`
  display: -webkit-box;
  align-items: baseline;
  box-sizing: border-box;
  padding-right: 15px;
  margin-bottom: 15px
`
export const Square = styled.div`
  width: 5px;
  height: 5px;
  background: #2C5C9F;
  margin-right: 10px
`