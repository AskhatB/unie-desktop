import { Wrap, List, Heading, Header } from './style'

const BankList = ({ title }) => {
  return (
    <div>
      <Header>
        <Heading>{title}</Heading>
      </Header>
      <List>
        <Wrap href="/shop/catalog?id=13">
          <img src="https://unie-assets.ams3.digitaloceanspaces.com/banks/halyk.png" />
        </Wrap>
        <Wrap href="/shop/catalog?id=1">
          <img src="https://unie-assets.ams3.digitaloceanspaces.com/banks/homecredit.png" />
        </Wrap>
        <Wrap href="/shop/catalog?id=2">
          <img src="https://unie-assets.ams3.digitaloceanspaces.com/banks/alfa.png" />
        </Wrap>
      </List>
    </div>
  )
}

export default BankList
