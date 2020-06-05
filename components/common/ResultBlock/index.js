import Link from 'next/link';
import toValidCost from '../toValidCost';

import Button from '../Button';

import {
  Wrap,
  Wrapper,
  Text,
  InfoBlock,
  Block
} from './style';

const ResultBlock = props => {
  return (
    <Wrap>
      <Wrapper>
        <Text fs='20px' fw='600' color='#282F36' mb='20px'>Результат расчета</Text>
        <InfoBlock>

          <Block>
            <Text fs='14px' color='#93979B' mb='10px'>Ежемесячный платеж</Text>
            <Text fs='16px' color='#282F36'>{toValidCost(props.perMonth)} ₸</Text>
          </Block>

          <Block>
            <Text fs='14px' color='#93979B' mb='10px'>Ежемесячный платеж</Text>
            <Text fs='16px' color='#282F36'>{toValidCost(props.overpay)} ₸</Text>
          </Block>

        </InfoBlock>

        <Link href={`
          /credit-registration?cid=${props.data.id}&sum=${props.amount}&max=${
            props.data.maxAmount
          }&city=almaty
        `}>
          <Button color='#F18E67' width='378px'
            disabled={!props.perMonth || !props.overpay}
          >
            Оформить заявку
          </Button>
        </Link>
      </Wrapper>
    </Wrap>
  )
}

export default ResultBlock;