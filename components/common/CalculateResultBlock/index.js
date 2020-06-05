import toValidCost from '../toValidCost';

import {
  Wrap,
  Wrapper,
  Text,
  TextBlock,
  Block
} from './style';

const CalculateResultBlock = props => {

  return (
    <Wrap>
      <Wrapper>
        <Text fs='20px' color='#282F36' fw='600' mb='20px'>Результат расчета</Text>
        <TextBlock>
          <Block>
            <Text fs='14px' color='#93979B' mb='10px'>Ежемесячный платеж</Text>
            {props.perMonth !== 0 ? props.perMonth.map(item => {
              return <Text key={item} mb='10px'>{toValidCost(item)} ₸</Text>
            }) : <Text mb='10px'>0 ₸</Text>}
          </Block>
          <Block>
            <Text fs='14px' color='#93979B' mb='10px'>Переплата по кредиту</Text>
            <Text>{toValidCost(props.overpay)} ₸</Text>
          </Block>
        </TextBlock>
      </Wrapper>
    </Wrap>
  )
}

export default CalculateResultBlock;