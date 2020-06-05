import cityTranslit from '../CityTranslit';
import { data } from './data';
import percentSumm from './percentSumm';
import Router from 'next/router';

import InputWithRange from '../InputWithRange';
import SelectTwo from '../SelectTwo';
import Button from '../Button';

import {
  Wrap,
  Wrapper,
  Title,
  InputWrapper,
  InputBlock,
  Text
} from './style';

const MortgageFilter = props => {
  const cities = props.cities.map(item => item.name);
  const mortgageInitial = data[1].map(item => item.name);
  const mortgageTerm = data[0].map(item => item.name);

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

    console.log('4len', monthlyPayment[0])
  }
  const pushCity = (city) => {
    Router.push(
      `/ipoteka?type=ipoteka&city=${
        city
      }`
    )
  }

  return (
    <Wrap>
      <Wrapper>
        <Title>Ипотека в {cityTranslit(props.url.query.city)}</Title>
        <InputWrapper>
          <InputBlock>
            <Text>Сумма недвижиости</Text>
            <InputWithRange amount={props.amount} setAmount={props.setAmount} max='1000000' width='280px' mb='0' />
          </InputBlock>

          <InputBlock>
            <Text>Первоначальный взнос</Text>
            <SelectTwo 
              width='180px'
              items={mortgageInitial}
              active={props.initialFee}
              onChange={props.setInitialFee}
            />
          </InputBlock>

          <InputBlock>
            <Text>Срок</Text>
            <SelectTwo 
              width='180px'
              items={mortgageTerm}
              active={props.term}
              onChange={props.setTerm}
            />
          </InputBlock>

          <InputBlock>
            <Text>Город</Text>
            <SelectTwo 
              width='280px'
              items={cities}
              active={props.city}
              onChange={props.setCity}
            />
          </InputBlock>
          
          <Button width='180px' color='#77BEFF'
            onClick={() => {
              annuity(
                15, percentSumm(props.amount, data[1][props.initialFee].numb), data[0][props.term].month
              ),
              pushCity(cityTranslit(cities[props.city]))
            }}
          >
            Подобрать
          </Button>
        </InputWrapper>
      </Wrapper>
    </Wrap>
  )
}

export default MortgageFilter;