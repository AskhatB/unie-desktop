import { Wrap, Heading, Paragraph } from './style'
import Button from '../../common/Button'
import ShareIcon from '../../icons/share'

const ProductDescription = props => {
  return (
    <Wrap>
      <Heading>Описание</Heading>
      <Paragraph>{props.description.replace(/([;])/g, ';\n')}</Paragraph>
    </Wrap>
  )
}

export default ProductDescription
