import Link from 'next/link';

import minSumm from '../minSumm';
import maxSumm from '../maxSumm';

import {
  Main,
  Wrap,
  Img,
  Text,
  CreditConditions,
  ConditionBlock,
  Button
} from './style';

const MainCreditCard = props => {
  return (
    <Main>
      <Wrap>
        <Img src={props.data.partnerLogo} />
        <Text fs='16px' fw='600' mb='5px'>{props.data.name}</Text>
        <Text fs='14px' mb='20px'>{props.data.shortDescripton}</Text>
        <CreditConditions>

          <ConditionBlock>
            <Text fs='14px' color='rgba(40, 47, 54, 0.3)' mb='6px'>Возраст</Text>
            <Text fs='14px' color='#282F36' fw='600'>{props.data.minAge} - {props.data.maxAge} лет</Text>
          </ConditionBlock>
          
          <ConditionBlock>
            <Text fs='14px' color='rgba(40, 47, 54, 0.3)' mb='6px'>Срок погашения</Text>
            <Text fs='14px' color='#282F36' fw='600'>
              от {props.data.minLoanTerm} мес - до {props.data.maxLoanTerm} мес
            </Text>
          </ConditionBlock>

          <ConditionBlock>
            <Text fs='14px' color='rgba(40, 47, 54, 0.3)' mb='6px'>
              {props.data.maxAmount < 1000000000 ? 'Сумма' : 'Сумма от залога'}
            </Text>
            <Text fs='14px' color='#282F36' fw='600'>
              от {minSumm(props.data.minAmount)} - до {
                props.data.maxAmount > 1000000000 ? props.data.pawnPercentage + ' %' : maxSumm(props.data.maxAmount)
              }
            </Text>
          </ConditionBlock>

          <ConditionBlock>
            <Text fs='14px' color='rgba(40, 47, 54, 0.3)' mb='6px'>Ставка</Text>
            <Text fs='14px' color='#282F36' fw='600'>{props.data.rate} %</Text>
          </ConditionBlock>

          <Link href={`/credit-registration?cid=${props.data.id}&sum=0&max=${
                          props.data.maxAmount}&city=kazakhstan`}>
            <Button>Оформить заявку</Button>
          </Link>
        </CreditConditions>
      </Wrap>
    </Main>
  )
}

export default MainCreditCard;