import styled from 'react-emotion'

export const Wrap = styled.div`
  border-radius: 10px;
  margin-top: 30px;
  padding-bottom: 30px;
  position: relative;
  &:hover {
    & span {
      opacity: 1;
    }
  }
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Heading = styled.div`
  font-family: Roboto Slab;
  font-size: 30px;
  color: #282f36;
  margin-bottom: 15px;
  box-sizing: border-box;
  font-weight: bold;
  margin-left: 12px;
`
export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
  & > img {
    width: 90%;
    height: 90%;
    object-fit: contain;
  }
`

export const ProductWrap = styled.a`
  display: block;
  width: 265px;
  ${props => props.withShadow && 'box-shadow: 0px 0px 15px rgba(0,0,0,0.04)'};
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  overflow: hidden;
  cursor: pointer;
  opacity: ${props => (props.loading ? '0.5' : '1')};
  background: #fff;
  padding: 15px 0;
  transition: box-shadow 0.2s;
  ${props => props.catalog && '&:nth-child(3n + 3){margin-right: 0;}'}
  ${props =>
    props.catalog && '&:hover{box-shadow: 0px 10px 15px rgba(0,0,0,0.05);}'}
`
export const Title = styled.div`
  font-family: Roboto Slab;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  font-weight: bold;
  line-height: 20px;
  height: 45px;
  font-size: 14px;
  color: #282f36;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 5px;
  margin-bottom: 5px;
  overflow: hidden;
`
export const PriceBlock = styled.div`
  display: flex;
  width: 100%;
`
export const PriceLabel = styled.div`
  color: #929699;
  font-size: 12px;
  font-weight: 400;
  ${props => props.right && `margin-right: ${props.right}`};
  ${props => props.left && `margin-left: ${props.left}`};
`
export const Price = styled.div`
  font-weight: bold;
  font-size: 16px;
  font-family: Roboto Slab;
  color: #282f36;
  margin-left: 15px;
  ${props => props.borderStatus && 'border-right: 1px solid #dfe0e1'};
  padding-right: 10px;
`

export const Installment = styled.div`
  border-radius: 7px;
  font-size: 12px;
  margin-right: 5px;
  padding-left: 10px;
`

export const InstallmentLabel = styled.div`
  color: #929699;
  line-height: 20px;
`

export const InstallmentPrice = styled.div`
  font-family: Roboto Slab;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 600;
  line-height: 20px;
  font-size: 16px;
  color: #ff4f52;
`

export const OfferAmount = styled.div`
  font-size: 12px;
  color: #939699;
  margin-left: 15px;
  margin-bottom: 10px;
`
export const ProductBlock = styled.div`
  display: flex;
  justify-content: space-between;
`
