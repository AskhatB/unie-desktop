import toValidCost from '../toValidCost';

import {
  Wrap,
  Wrapper,
  Title,
  InfoBlock,
  Block,
  Text
} from './style';

const LoanRegistration = props => {

  let monthsAll = [
    { name: '1 месяц' },
    { name: '3 месяца' },
    { name: '6 месяцев' },
    { name: '9 месяцев' },
    { name: '12 месяцев' },
    { name: '24 месяцев' },
    { name: '36 месяцев' },
    { name: '48 месяцев' },
    { name: '60 месяцев' },
    { name: '120 месяцев' },
    { name: '240 месяцев' }
  ]
  let monthDurations = [1, 3, 6, 9, 12, 24, 36, 48, 60, 120, 240]
  let firstIndex
  let lastIndex

  monthDurations.forEach((el, index) => {
    if (el === props.data.minLoanTerm ||
        el > props.data.minLoanTerm) {
          if (firstIndex === undefined) {
            firstIndex = index
          }
          if (el === props.data.maxLoanTerm ||
              el < props.data.maxLoanTerm){
            lastIndex = index
          }
    }
  })
  
  let months = []
  monthDurations = monthDurations.slice(firstIndex, lastIndex + 1)
  months = monthsAll.slice(firstIndex, lastIndex + 1).map(item => item.name)

  let partnerRate = props.data.id === 83 ? 0.5 : props.data.rate
  return (
    <Wrap>
      <Wrapper>
        <Title>{props.data.name} ({props.registrationStep} шаг из 2)</Title>
        <InfoBlock>
          {props.registrationStep === 2 && (
            <Block>
              <Text fs='14px' color='#93979B' mb='10px'>Сумма кредита (валюта кредита)</Text>
              <Text>{toValidCost(props.amount)} (тенге)</Text>
            </Block>
          )}
          {props.registrationStep === 2 && (
            <Block>
              <Text fs='14px' color='#93979B' mb='10px'>Срок кредитования</Text>
              <Text>{months[props.loanTerm]}</Text>
            </Block>
          )}

          <Block>
            <Text fs='14px' color='#93979B' mb='10px'>Ставка</Text>
            <Text>{props.data.rate} %</Text>
          </Block>

          {props.data.partner !== 8 && (
            <Block>
              <Text fs='14px' color='#93979B' mb='10px'>Ежемесячный платеж</Text>
              <Text>
                {toValidCost(props.annuity(partnerRate, props.amount, monthDurations[props.loanTerm]))} ₸
              </Text>
            </Block>
          )}
        </InfoBlock>
      </Wrapper>
    </Wrap>
  )
}

export default LoanRegistration;