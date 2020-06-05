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
  Description
} from './style'

const ConditionsBlock = props => {
  return (
    <Wrap>
      <TopBlock>
        <TopBlockInfo>
          <Tick />
          <Text>Сумма кредита</Text>
          <Info>
            от {props.data.minAmount} ₸ - до {props.data.maxAmount} ₸
          </Info>
        </TopBlockInfo>
        <TopBlockInfo>
          <Tick />
          <Text>Срок</Text>
          <Info>
            от {props.data.minLoanTerm} - до {props.data.maxLoanTerm} месяцев
          </Info>
        </TopBlockInfo>
        <TopBlockInfo>
          <Tick />
          <Text>Дополнительно</Text>
          <Info>Неустойка</Info>
        </TopBlockInfo>
        <TopBlockInfo>
          <Tick />
          <Text>Получение</Text>
          <Info>{props.data.id === 44 ? 'На счет' : 'Наличными/на карту'}</Info>
        </TopBlockInfo>
        <TopBlockInfo>
          <Tick />
          <Text>Рассмотрение</Text>
          <Info>
            {props.data.id === 44
              ? 'до 20 минут'
              : 'от ' +
                props.data.minApprovalDays +
                ' - до ' +
                props.data.maxApprovalDays +
                ' дней'}
          </Info>
        </TopBlockInfo>
        <TopBlockInfo>
          <Tick />
          <Text>Место выдачи</Text>
          <Info>
            {props.data.id === 44
              ? 'Онлайн оформление'
              : 'Отделения банков/онлайн оформление'}
          </Info>
        </TopBlockInfo>
      </TopBlock>
      {/* <BottomBlock>
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
      </BottomBlock> */}
    </Wrap>
  )
}

export default ConditionsBlock
