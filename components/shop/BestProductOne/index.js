import { Wrap, Heading, Subheading, InfoBlock } from './style'
import Button from '../../common/Button'
import Link from 'next/link'

const BestProductOne = props => {
  return (
    <Wrap>
      <InfoBlock>
        <Heading>Успей купить iPhone XS</Heading>
        <Subheading>за 507 084 ₸</Subheading>
        <Link prefetch href="/shop/product?id=26487">
          <Button
            color="#2C5C9F"
            width="max-content"
            height="40px"
            round="20px"
            top="20px">
            Купить
          </Button>
        </Link>
      </InfoBlock>
    </Wrap>
  )
}

export default BestProductOne
