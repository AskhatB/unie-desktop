import Button from '../../common/Button'
import toValidCost from '../../common/toValidCost'
import {
  Wrap,
  Text,
  Block,
  TopBlock,
  BotBlock,
  BlockText,
  BlockNumb
} from './style'

const RateBlock = props => {
  return (
    <Wrap>
      <Text>
        Процентные ставки определяются индивидуально для каждого заемщика в
        соответствии с оценкой данных заемщика
      </Text>
      <Block>
        <TopBlock>
          <BlockText>Сумма кредита</BlockText>
          <BlockNumb>
            {props.data.maxAmount < 1000000000
              ? (props.data.minAmount < 1000000000 &&
                  `от ${toValidCost(props.data.minAmount)} ₸ - `) ||
                props.data.pawnPercentage + '%'
              : null}
            {(props.data.maxAmount < 1000000000 &&
              'до ' + toValidCost(props.data.maxAmount) + ' ₸') ||
              props.data.pawnPercentage + '%'}
          </BlockNumb>
        </TopBlock>
        <BotBlock>
          <BlockText>Ставка</BlockText>
          <BlockNumb>{props.data.rate}%</BlockNumb>
        </BotBlock>
      </Block>
      <Text>{props.data.rateInfo}</Text>
      <Text
        dangerouslySetInnerHTML={{
          __html: props.data.description
        }}
      />
    </Wrap>
  )
}

export default RateBlock
