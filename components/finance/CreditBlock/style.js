import styled from 'react-emotion'

export const Wrap = styled.div`
  padding: 0 30px 30px;
  display: -webkit-box;
  align-items: flex-start;
  overflow: hidden;
  margin-bottom: 30px;
  position: relative;
  max-height: ${props => (props.active ? '2000px' : `100px`)};
  transition: 0.5s;
  border-bottom: 1px solid rgba(40, 47, 54, 0.15);
  &:last-child {
    border: none;
  }
`
export const Img = styled.div`
  display: flex;
  max-width: 130px;
  max-height: 80px;
  & > img {
    width: 100%;
    height: 100%;
  }
`
export const Block = styled.div`
  width: ${props => props.width || 'auto'};
  margin-right: 40px;
`
export const Text = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 14px;
  color: #000000;
  margin-bottom: 10px;
`
export const Numb = styled.div`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: bold;
  line-height: 25px;
  font-size: 16px;
  color: #000000;
  margin-bottom: 10px;
`
export const MoreBtn = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 12px;
  color: #3dc47e;
  position: absolute;
  left: 30px;
  bottom: 30px;
  cursor: pointer;
`
