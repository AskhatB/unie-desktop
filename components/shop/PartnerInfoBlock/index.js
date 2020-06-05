import { Wrap, Heading, Item, Name, Value } from './style'

const PartnerInfoBlock = props => {
  return (
    <Wrap width={props.width}>
      <Heading>{props.title}</Heading>
      {props.items.map(val => {
        return (
          <Item>
            <Name>{val.name}</Name>
            <Value>{val.value}</Value>
          </Item>
        )
      })}
    </Wrap>
  )
}

export default PartnerInfoBlock
