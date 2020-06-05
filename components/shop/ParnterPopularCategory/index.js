import { Wrap, List, Heading } from './style'
import Link from 'next/link'

const ParnterPopularCategory = props => {
  return (
    <List>
      {props.data.map(val => {
        return (
          <Wrap
            href={`/shop/catalog?id=${val.category.id}&Магазин=${
              props.partnerId
            }`}>
            <img src={val.image} />
            <Heading>{val.category.name}</Heading>
          </Wrap>
        )
      })}
    </List>
  )
}

export default ParnterPopularCategory
