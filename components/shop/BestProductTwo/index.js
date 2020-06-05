import { Wrap, Heading, Subheading, InfoBlock } from './style'
import Button from '../../common/Button'

const BestProductOne = props => {
  return (
    <Wrap
      bg={`http://assets.unie.kz/images?size=1100x400&url=${
        props.data[0].mediaUrl
      }`}>
      <InfoBlock>
        <Heading>{props.data[0].heading}</Heading>
        <Subheading>{props.data[0].subheading}</Subheading>
        <Button
          color="#2C5C9F"
          width="max-content"
          height="40px"
          round="20px"
          top="20px">
          Купить
        </Button>
      </InfoBlock>
    </Wrap>
  )
}

export default BestProductOne
