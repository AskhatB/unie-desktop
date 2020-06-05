import { Wrap, Block, Text, BoldText, MiddleBlock, DocumentList } from './style'

const RequirementsBlock = props => {
  const requirements = props.data.requirements
  const content = requirements.map((el, i) => {
    if (i % 2 !== 0) {
      return (
        <Block>
          <BoldText>{el}</BoldText>
        </Block>
      )
    }
    return (
      <MiddleBlock>
        <BoldText>{el}</BoldText>
      </MiddleBlock>
    )
  })
  return (
    <div>
      <Wrap>{content}</Wrap>
      {props.data.requirements_exceptions &&
        '*Возможны исключения обратитесь в банк'}
    </div>
  )
}

export default RequirementsBlock
