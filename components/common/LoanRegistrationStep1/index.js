import toValidCost from '../toValidCost';

import InputWithRange from '../InputWithRange';
import SelectOne from '../SelectOne';
import Button from '../Button';

import {
  Wrap,
  Wrapper,
  Text
} from './style';

const LoanRegistrationStep1 = props => {
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
    { name: '240 месяцев' },
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

  // используй этот код для высчитываания permonth
  // annuity(props.data.rate, props.amount, monthDurations[props.loanTerm])
  return (
    <Wrap>
      <Wrapper>
        <Text>Сумма кредита (минимальная сумма  {toValidCost(props.data.minAmount)} ₸)</Text>
        <InputWithRange amount={props.amount} setAmount={props.setAmount} max={props.data.maxAmount} />

        <SelectOne 
          title='Срок кредита'
          items={months}
          active={props.loanTerm}
          onChange={props.setLoanTerm}
          mb='30px'
        />

        <Button color='#F18E67' 
          disabled={props.data.minAmount > props.amount}
          onClick={() => props.setRegistrationStep(props.registrationStep + 1)}
        >
          Далее
        </Button>
      </Wrapper>
    </Wrap>
  )
}

export default LoanRegistrationStep1;