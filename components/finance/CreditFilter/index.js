import { ApolloConsumer } from 'react-apollo';
import Router from 'next/router';
import CityTranslit from '../../common/CityTranslit';
import { LOANS } from './queries';

import Button from '../../common/Button';
import SelectTwo from '../../common/SelectTwo';
import InputWithRange from '../../common/InputWithRange';

import {
  Wrap,
  Wrapper,
  Title,
  InputWrapper,
  Block,
  Text
} from './style';

const CreditFilter = props => {
  let loanTypes = props.landingFilters.map(item => {
    return item.name
  })
  let loanDurations = props.duration.map(item => {
    return item.name
  })
  let cities = props.cities.map(item => {
    return item.name
  })

  const pushToUrl = (amount, type, city) => {
    Router.push(
      `${props.url.pathname}?type=${CityTranslit(type)}&city=${CityTranslit(city)}&sumrange=${amount}`
    )

    let index = -1;
    for (var i = 0, len = props.cities.length; i < len; i++) {
      if (props.cities[i].name === city) {
        index = i
        break
      }
    }
    localStorage.setItem('cityIdx', index)
  }
  
  return (
    <Wrap>
      <Wrapper>
        <Title>{CityTranslit(props.url.query.type)} в г.{CityTranslit(props.url.query.city)}</Title>
        <InputWrapper>
          <Block>
            <Text>Сумма кредита</Text>
            <InputWithRange amount={props.amount} setAmount={props.setAmount} max='1000000' 
              width='273px' mb='0px' step='5000' />
          </Block>

          <Block>
            <Text>Вид кредита</Text>
            <SelectTwo 
              width='273px'
              items={loanTypes}
              active={props.loanType}
              onChange={props.setLoanType}
            />
          </Block>

          <Block>
            <Text>Срок кредита</Text>
            <SelectTwo 
              width='180px'
              items={loanDurations}
              active={props.loanDuration}
              onChange={props.setLoanDuration}
            />
          </Block>

          <Block>
            <Text>Город</Text>
            <SelectTwo 
              width='180px'
              items={cities}
              active={props.city}
              onChange={props.setCity}
            />
          </Block>

          <div onClick={() => pushToUrl(props.amount, loanTypes[props.loanType], cities[props.city])}>
            <ApolloConsumer>
              {client => {
                return (
                  <Button
                    width='180px' bs='0px 5px 20px rgba(40, 47, 54, 0.05)' color='#77BEFF'
                    onClick={async () => {
                      await client.query({
                        query: LOANS,
                        variables: {
                          sumrange: props.amount,
                          cityId: props.cities[props.city].id,
                          loanTerm: props.duration[props.loanDuration].number,
                          loanTypeId: props.loanType
                        }
                      }).then(res => {
                        if (res.data.filterLoans) {
                          props.setLoanList(res.data.filterLoans)
                        }
                      })
                    }}
                  >
                    Поиск
                  </Button>
                )
              }}
            </ApolloConsumer>
          </div>
        </InputWrapper>
      </Wrapper>
    </Wrap>
  )
};

export default CreditFilter;