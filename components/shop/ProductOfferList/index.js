import { Wrap, Item, Name, Rating, Price } from './style'
import Button from '../../common/Button'
import toValidCost from '../../common/toValidCost'

const ProductOfferList = props => {
  return (
    <Wrap>
      {props.data.map((val, indx) => {
        return (
          <Item>
            <Name>{val.shopPartner.name}</Name>
            <Rating />
            <Price>{toValidCost(val.partnerPrice)} ₸</Price>
            <Button
              color="#2C5C9F"
              width="max-content"
              height="40px"
              round="20px"
              onClick={() => props.onClick(indx)}
              active={props.active === indx}>
              Выбрать
            </Button>
          </Item>
        )
      })}
    </Wrap>
  )
}

export default ProductOfferList
