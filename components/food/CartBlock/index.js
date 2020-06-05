import {
  Wrap,
  Title,
  EmptyCart,
  BottomInfo,
  DeliveryInfo,
  Name,
  Info,
  Block,
  Left,
  Right
} from './style'

const CartBlock = props => {
  let totalSum = 0
  JSON.parse(localStorage.getItem('cart')).map(item => {
    totalSum += item.price
  })
  return (
    <Wrap>
      <Title>МОЙ ЗАКАЗ</Title>
      {localStorage.getItem('cart') ? (
        JSON.parse(localStorage.getItem('cart')).map(item => {
          return (
            <Block>
              <Left>
                {item.name}
                <div>{item.price} ₸</div>
              </Left>
              <Right />
            </Block>
          )
        })
      ) : (
        <EmptyCart>
          Выберите блюда и добавьте <br /> их к заказу
        </EmptyCart>
      )}
      <BottomInfo>
        <DeliveryInfo>
          <Name>Время доставки</Name>
          <Info>30-40 мин</Info>
        </DeliveryInfo>
        <DeliveryInfo>
          <Name>Итого:</Name>
          <Info>{totalSum} ₸</Info>
        </DeliveryInfo>
      </BottomInfo>
    </Wrap>
  )
}

export default CartBlock
