import { Wrap, Label, AmountControl, Sign, Amount } from './style'

const ProductAmount = props => {
  return (
    <Wrap>
      <Label>Количество</Label>
      <AmountControl>
        <Sign onClick={() => props.onClick(1)}>-</Sign>
        <Amount>{props.value}</Amount>
        <Sign onClick={() => props.onClick(0)}>+</Sign>
      </AmountControl>
    </Wrap>
  )
}

export default ProductAmount
