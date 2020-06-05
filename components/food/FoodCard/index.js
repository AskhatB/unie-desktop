import { Wrap, Img, Info, Name, Price, Description, AddBtn } from './style'

const FoodBlock = props => {
  return (
    <Wrap>
      <AddBtn
        onClick={() =>
          props.addToCart(props.item.oid, props.item.price, props.item.name, 1)
        }>
        Добавить
      </AddBtn>
      <Img>
        <img src={props.item.imgUrl} />
      </Img>
      <Info>
        <Name>{props.item.name}</Name>
        <Price>{props.item.price} ₸</Price>
      </Info>
      <Description>{props.item.description}</Description>
    </Wrap>
  )
}

export default FoodBlock
