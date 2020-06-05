import { Wrap, Header, Item, Name, Dashes, Value } from './style'

const PartnerPageDelivery = props => {
  return (
    <Wrap>
      <Header>{props.title}</Header>
      <Item>
        <Name>до 2 990 тнг</Name>
        <Dashes>.............................................</Dashes>
        <Value>1 000 тнг</Value>
      </Item>
      <Item>
        <Name>до 2 990 тнг</Name>
        <Dashes>.............................................</Dashes>
        <Value>1 000 тнг</Value>
      </Item>
    </Wrap>
  )
}

export default PartnerPageDelivery
