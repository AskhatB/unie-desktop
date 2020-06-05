import styled from 'react-emotion'

export const Section1 = styled.div`
  background: #fff;
  border-radius: 7px;
  margin-top: 10px;
  padding: 40px 17px;
  box-sizing: border-box;
  & > h1 {
    display: block;
    font-size: 22px;
    font-weight: bold;
    font-family: Roboto Slab, sans-serif;
    margin-top: 100px;
  }
`

export const Section2 = styled.div`
  background: #fff;
  border-radius: 7px;
  margin-top: 10px;
  padding: 0 17px 35px;
  box-sizing: border-box;
  margin-bottom: 25px;
`

export const FeatureBlock = styled.div`
  display: flex;
  align-items: center;
  color: #282f36;
  opacity: 0.8;
  font-size: 14px;
  margin-top: 20px;
`

export const FeatureName = styled.div`
  width: 60px;
`

export const BuySwitch = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  margin-top: 25px;
`
export const ActiveBlue = styled.div`
  color: ${props => (props.active === 0 && '#4592FF') || '#cccccc'};
  font-weight: ${props => (props.active === 0 && 'bold') || '400'};
  font-size: ${props => (props.active === 0 && '16px') || '14px'};
`
export const ActiveYellow = styled.div`
  color: ${props => (props.active === 1 && '#FFD600') || '#cccccc'};
  font-weight: ${props => (props.active === 1 && 'bold') || '400'};
  font-size: ${props => (props.active === 1 && '16px') || '14px'};
`

export const PriceBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  & > span {
    display: block;
    font-size: 20px;
    font-weight: bold;
  }
`

export const Price = styled.div`
  font-size: 20px;
  font-weight: bold;
`

export const BuyButton = styled.div`
  display: flex;
  align-items: center;
`

export const Cart = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #dfe0e1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`

export const Instalment = styled.div`
  margin-top: 20px;
`

export const Term = styled.div``

export const Bank = styled.div``

export const H5 = styled.h5`
  font-size: 14px;
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`

export const GrayText = styled.div`
  color: #c4c4c4;
  font-size: 12px;
`

export const InstalmentPrice = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-left: 40px;
`

export const ActivePartner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: ${props =>
    (props.active && '1px solid #4592FF') || '1px solid #dfe0e1'};
  border-radius: 7px;
  padding: 15px 12px;
  box-sizing: border-box;
  margin-top: 15px;
`

export const PartnerName = styled.div`
  font-size: 16px;
  text-transform: capitalize;
`

export const PartnerPrice = styled.div`
  font-weight: bold;
  font-size: 16px;
`

export const Monthes = styled.div`
  display: flex;
`
export const Month = styled.div`
  width: 65px;
  line-height: 40px;
  font-size: 14px;
  cursor: pointer;
  color: #52585c;
  ${props => props.active && 'background: #ffe249'};
  border: 1px solid ${props => (props.active && '#edc804') || '#dfe0e1'};
  &:first-child {
    border-radius: 5px 0 0 5px;
  }
  &:last-child {
    border-radius: 0 5px 5px 0;
  }
  text-align: center;
`
