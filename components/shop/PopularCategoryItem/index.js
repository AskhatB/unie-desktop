import { Wrap, List, Heading } from './style'
import Link from 'next/link'

const PopularCategoryItem = props => {
  return (
    <List>
      <Wrap href="/shop/catalog?id=13">
        <img src="https://unie-assets.ams3.digitaloceanspaces.com/store/categories/electronics_popular.jpg" />
        <Heading>Электроника</Heading>
      </Wrap>
      <Wrap href="/shop/catalog?id=1">
        <img src="https://unie-assets.ams3.digitaloceanspaces.com/store/categories/auto_popular.jpg" />
        <Heading>Авто</Heading>
      </Wrap>
      <Wrap href="/shop/catalog?id=2">
        <img src="https://unie-assets.ams3.digitaloceanspaces.com/store/categories/appliances_popular.jpg" />
        <Heading>Бытовая техника</Heading>
      </Wrap>
      <Wrap href="/shop/catalog?id=8">
        <img src="https://unie-assets.ams3.digitaloceanspaces.com/store/categories/beauty_popular.jpg" />
        <Heading>Красота и здоровье</Heading>
      </Wrap>
    </List>
  )
}

export default PopularCategoryItem
