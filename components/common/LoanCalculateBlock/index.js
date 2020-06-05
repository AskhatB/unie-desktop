import Router from 'next/router';
import cityTranslit from '../CityTranslit';

import InputWithRange from '../InputWithRange';
import SelectTwo from '../SelectTwo';
import Button from '../Button';
import RadioBtn from '../RadioBtn';

import {
  Wrap,
  Wrapper,
  Title,
  InputsWrapper,
  Block,
  Text,
  RadioBtnWrapper,
  Radio
} from './style';

const LoanCalculateBlock = props => {
  let monthsAll = [
    { name: '1 месяц', number: 1 },
    { name: '3 месяца', number: 3 },
    { name: '6 месяцев', number: 6 },
    { name: '9 месяцев', number: 9 },
    { name: '12 месяцев', number: 12 },
    { name: '24 месяцев', number: 24 },
    { name: '36 месяцев', number: 36 },
    { name: '48 месяцев', number: 48 },
    { name: '60 месяцев', number: 60 },
    { name: '120 месяцев', number: 120 },
    { name: '240 месяцев', number: 240 }
  ]
  let term = monthsAll.map(item => item.name);
  let cities = props.cities.map(item => item.name);

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
    
    props.setPerMonth(monthlyPayments)
    props.setOverpay(overpayment.toFixed(2))
  }

  // дифференциальный расчет
  const differential = (rate, amount, period) => {
    const loanAmount = amount
    const loanTerm = period
    const gesv = rate / 100
    const mainPayment = loanAmount / loanTerm
    let monthlyPayments = []
    let accumulator = 0.0
    for (let i = 0; i < loanTerm; i++) {
      let payment = mainPayment + (loanAmount - (mainPayment * i)) * gesv / 12
      let fixedPayment = payment.toFixed(2)
      accumulator += payment
      monthlyPayments.push(fixedPayment)
    }

    const overpayment = accumulator - loanAmount

    props.setPerMonth(monthlyPayments)
    props.setOverpay(overpayment.toFixed(2))
  }

  let calculate
  if (props.paymentType === 0) {
    calculate = () => annuity(props.rate, props.amount, monthsAll[props.term].number)
  } else if (props.paymentType === 1) {
    calculate = () => differential(props.rate, props.amount, monthsAll[props.term].number)
  }

  const changeCity = e => {
    props.setCity(e)
    
    Router.push(`
      ${props.url.pathname}?city=${cityTranslit(cities[e])}
    `)
  }
  
  return (
    <Wrap>
      <Wrapper>
        <Title>Кредитный калькулятор</Title>
        <InputsWrapper>
          <Block>
            <Text>Сумма</Text>
            <InputWithRange 
              amount={props.amount} setAmount={props.setAmount} max='1000000' width='280px' mb='0' 
            />
          </Block>

          <Block>
            <Text>Ставка</Text>
            <InputWithRange 
              amount={props.rate} setAmount={props.setRate} max='50' width='280px' mb='0' step='1'
            />
          </Block>
          
          <Block>
            <Text>Срок</Text>
            <SelectTwo 
              width='180px'
              items={term}
              active={props.term}
              onChange={props.setTerm}
            />
          </Block>
          
          <Block>
            <Text>Город</Text>
            <SelectTwo 
              width='180px'
              items={cities}
              active={props.city}
              onChange={(e) => changeCity(e)}
            />
          </Block>

          <Button width='180px' color='#77BEFF'
            onClick={calculate} disabled={props.amount == 0 || props.rate == 0}
          >
            Рассчитать
          </Button>
        </InputsWrapper>

        <RadioBtnWrapper>
          <Text mr='50px'>Вид платежа:</Text>
          <Radio onClick={() => props.setPaymentType(0)}>
            <RadioBtn checked={0 === props.paymentType}>Аннуитетный</RadioBtn>
          </Radio>

          <Radio onClick={() => props.setPaymentType(1)}>
            <RadioBtn checked={1 === props.paymentType}>Дифференциальный</RadioBtn>
          </Radio>
        </RadioBtnWrapper>
      </Wrapper>
    </Wrap>
  )
}

export default LoanCalculateBlock;