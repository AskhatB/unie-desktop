import styled from 'react-emotion'

export const Wrap = styled.div`
  padding: 0 0 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
  margin-bottom: 30px;
  position: relative;
  transition: 0.5s;
  border-bottom: 1px solid rgba(40, 47, 54, 0.15);
  &:last-child {
    border: none;
  }
`
export const Img = styled.div`
  display: flex;
  margin-top: 25px;
  max-width: 220px;
  max-height: 140px;
  & > img {
    width: 100%;
    height: 100%;
  }
`
export const ImageBlock = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
`

export const Block = styled.div`
  width: ${props => props.width || 'auto'};
  margin-top: ${props => props.margin || '0'};
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
  font-size: 15px;
  color: #000000;
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

export const CardPartner = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 25px;
  font-size: 16px;
  color: #282f36;
  opacity: 0.5;
`

export const CardName = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
  font-size: 18px;
  color: #4592ff;
  margin-bottom: 10px;
`

export const GreyText = styled.span`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 25px;
  font-size: 16px;
  color: #282f36;
  opacity: 0.5;
`
