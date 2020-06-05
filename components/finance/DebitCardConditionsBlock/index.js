import Tick from '../../icons/tick'
import Button from '../../common/Button'
import {
  Wrap,
  TopBlock,
  TopBlockInfo,
  Text,
  Info,
  BottomBlock,
  Title,
  Description,
  TopBlockContent
} from './style'

const ConditionsBlock = props => {
  return (
    <Wrap>
      <TopBlock>
        <TopBlockContent>
          <TopBlockInfo>
            <Tick />
            <Text>Снятие наличных в своем банке</Text>
            <Info>до {props.data.ownBankWithdrawalLimit} ₸ в месяц</Info>
          </TopBlockInfo>
          <TopBlockInfo>
            <Tick />
            <Text>Снятие наличных в других банках</Text>
            <Info>до {props.data.otherBankWithdrawalLimit} ₸ в месяц</Info>
          </TopBlockInfo>
          <TopBlockInfo>
            <Tick />
            <Text>Kомиссия за снятие наличных в своем банке</Text>
            <Info>{props.data.ownBankWithdrawalCommission} %</Info>
          </TopBlockInfo>
        </TopBlockContent>
        <TopBlockContent>
          <TopBlockInfo>
            <Tick />
            <Text>Kомиссия за снятие наличных в других банках</Text>
            <Info>{props.data.otherBankWithdrawalCommission} %</Info>
          </TopBlockInfo>
          <TopBlockInfo>
            <Tick />
            <Text>Kомиссия за годовое обслуживание карты</Text>
            <Info>{props.data.yearlyMaintenanceCost} ₸</Info>
          </TopBlockInfo>
          <TopBlockInfo>
            <Tick />
            <Text>Kомиссия за выпуск карты</Text>
            <Info>{props.data.cardRelease} ₸</Info>
          </TopBlockInfo>
        </TopBlockContent>
      </TopBlock>
      <BottomBlock>
        <Title>Платежи</Title>
        <Description>Аннуитетные</Description>
        <Title>Описание</Title>
        <Description>
          Участником программы может стать клиент с кредитной историей в любом
          банке, не допускавший просрочек при погашении. Одобрение за 1 минуту.
        </Description>
        <Title>Штраф</Title>
        <Description>
          В случае неисполнения/ненадлежащего/несвоевременного исполнения
          клиентом полностью или частично обязательств по осуществлению
          платежей, предусмотренных договором, клиент обязуется выплатить банку
          неустойку в размере 20 % годовых на сумму просроченной задолженности
          по основному долгу и просроченных процентов.
        </Description>
        <Title>Дополнительные условия</Title>
        <Description>
          Предоставление дополнительных документов позволит снизить ставку.
          Оформление кредита возможно либо в регионе постоянной регистрации,
          либо в регионе постоянной работы.
        </Description>
      </BottomBlock>
    </Wrap>
  )
}

export default ConditionsBlock
