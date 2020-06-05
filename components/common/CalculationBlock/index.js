import Button from '../Button';
import InputWithRange from '../InputWithRange';
import SelectTwo from '../SelectTwo';

import {
  Wrap,
  Wrapper,
  LoanInfo,
  Title,
  Img,
  Text,
  InputsBlock,
  Block
} from './style';

const CalculationBlock = props => {
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

  // формула расчета кредита (слава Асхату)
  const annuity = (rate, amount, period) => {
    const loanAmount = amount
    const loanTerm = period
    const gesv = rate / 100
    let annuity = loanAmount * ( ( gesv / 12 ) / ( 1 - Math.pow( ( 1 + ( gesv / 12 ) ), loanTerm * (-1))))
    const monthlyPayment =  annuity.toFixed(2)
    const overpayment = (annuity * loanTerm).toFixed(2) - loanAmount
    let monthlyPayments = []
    monthlyPayments.push(monthlyPayment)
    
    props.setPerMonth(monthlyPayments[0])
    props.setOverpay(overpayment.toFixed(2))
  }

  return (
    <Wrap>
      <Wrapper>
        <LoanInfo>
          <Title>{props.data.name}</Title>
          <Img src={props.data.partnerLogo} />
        </LoanInfo>
        <Text fs='14px' color='#93979B' mb='6px'>Ставка</Text>
        <Text fs='16px' mb='30px' color='#282F36'>{props.data.rate} %</Text>
        <InputsBlock>
          <Block>
            <Text fs='14px' color='#282F36' mb='8px'>Сумма кредита</Text>
            <InputWithRange amount={props.amount} setAmount={props.setAmount} max='1000000' mb='0' 
            width='100%' />
          </Block>
          <Block>
            <Text fs='14px' color='#282F36' mb='8px'>Срок кредита</Text>
            <SelectTwo 
              items={months} width='100%' active={props.loanTerm}
              onChange={props.setLoanTerm}
            />
          </Block>
          <Button color='#77BEFF' width='180px'
            onClick={() => annuity(props.data.rate, props.amount, monthDurations[props.loanTerm])}
          >
            Расчитать
          </Button>
        </InputsBlock>
      </Wrapper>
    </Wrap>
  )
}

export default CalculationBlock;