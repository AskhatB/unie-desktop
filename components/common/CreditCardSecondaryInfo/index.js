import {
  Wrap,
  Wrapper,
  Title,
  InfoBlock,
  Block,
  Text,
  ReqBlock,
  Square,
  Border
} from './style';

const CreditCardSecondaryInfo = props => {
  return (
    <Wrap>
      <Wrapper>
        <Title>Ставка</Title>
        <InfoBlock>
          <Block>
            <Text fs='14px' color='#93979B' mb='10px'>Номинальная ставка</Text>
            <Text>от {props.data.rate}%</Text>
          </Block>

          <Block>
            <Text fs='14px' color='#93979B' mb='10px'>ГЭСВ</Text>
            <Text>от {props.data.gesv}%</Text>
          </Block>
        </InfoBlock>

        <Title>Условия</Title>
        <InfoBlock>
          <Block>
            <Text fs='14px' color='#93979B' mb='10px'>Ежемесячный лимит</Text>
            <Text>до {props.data.maxAmount} ₸</Text>
          </Block>

          <Block>
            <Text fs='14px' color='#93979B' mb='10px'>Валюта</Text>
            <Text>тенге</Text>
          </Block>

          <Block>
            <Text fs='14px' color='#93979B' mb='10px'>Минимальный ежемесячный платеж</Text>
            <Text>не менее {props.data.minAmount} ₸</Text>
          </Block>
        </InfoBlock>

        <Title>Требования</Title>
        {props.data.requirements.map((item, idx) => {
          return (
            <ReqBlock key={idx}>
              <Square />
              <Text fs='14px' color='#282F36'>{item}</Text>
            </ReqBlock>
          )
        })}
        <Border />

        <Title>Документы</Title>
        {props.data.documentlist.map((item, idx) => {
          return <Text key={idx} fs='14px' color='#282F36'>{item}</Text>
        })}
        <Text color='#BEC0C3' fs='14px'>при необходимости, банк может запросить дополнительные документы</Text>
      </Wrapper>
    </Wrap>
  )
}

export default CreditCardSecondaryInfo;