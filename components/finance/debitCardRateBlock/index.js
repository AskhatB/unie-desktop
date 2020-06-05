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
          <BlockText>Годовое обслуживание основной карты</BlockText>
          <BlockNumb>{props.data.yearlyMaintenanceCost} ₸</BlockNumb>
        </TopBlock>
        <BotBlock>
          <BlockText>Kомиссия за снятие наличных </BlockText>
          <BlockNumb>{props.data.ownBankWithdrawalCommission}%</BlockNumb>
        </BotBlock>
        <TopBlock>
          <BlockText>Cнятие наличных в банкоматах по Казахстану</BlockText>
          <BlockNumb>
            до {props.data.ownBankWithdrawalLimit} ₸ в месяц
          </BlockNumb>
        </TopBlock>
        <BotBlock>
          <BlockText>Kомиссия за SMS-Банкинг</BlockText>
          <BlockNumb>{props.data.smsCost}%</BlockNumb>
        </BotBlock>
      </Block>
    </Wrap>
  )
}

export default RateBlock
