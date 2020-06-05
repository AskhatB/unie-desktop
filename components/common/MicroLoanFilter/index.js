import Router from 'next/router';
import cityTranslit from '../CityTranslit';
import { LOANS } from '../../../pages/microcredit/queries';
import { ApolloConsumer } from 'react-apollo';

import InputWithRange from '../InputWithRange';
import SelectTwo from '../SelectTwo';
import Button from '../Button';

import {
  Wrap,
  Wrapper,
  Title,
  Inputs,
  Block,
  Text
} from './style';

const MicroLoanFilter = props => {
  const cities = props.cities.map(item => item.name)
  const pushToUrl = (city, amount) => {
    Router.push(
      `${props.url.pathname}?city=${cityTranslit(city)}&sumrange=${amount}`
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
        <Title>Микрокредиты в г.{cityTranslit(props.url.query.city)}</Title>
        <Inputs>
          <Block>
            <Text mb='10px' fs='16px'>Сумма кредита</Text>
            <InputWithRange width='100%' amount={props.amount} setAmount={props.setAmount} 
                            max='1000000' mb='0' />
          </Block>

          <Block>
            <Text mb='10px' fs='16px'>Город</Text>
            <SelectTwo width='100%' items={cities} active={props.city} onChange={props.setCity} />
          </Block>

          {/* <ApolloConsumer> */}
            {/* {client => { */}
              {/* return ( */}
                <Button color='#77BEFF' width='200px' onClick={() => pushToUrl(cities[props.city], props.amount)}>
                  Поиск
                </Button>
              {/* ) */}
            {/* }} */}
          {/* </ApolloConsumer> */}
          
        </Inputs>
      </Wrapper>
    </Wrap>
  )
}

export default MicroLoanFilter;