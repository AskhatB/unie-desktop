import Link from 'next/link';
import minSum from './minSum';
import maxSum from './maxSum';

import Button from '../Button';

import {
  Wrap,
  Img,
  BtnWrap,
  InfoBlock,
  Text,
  Conditions,
  ConditionBlock,
  PromotionBlock,
  Image,
  Yellow,
  PromText,
  Prom
} from './style';

const LoanCard = props => {
  return (
    <Wrap>
      {/* если тип акций 2 то есть img и показать 2 вариант блока */}
      {props.item.promotionType === 2 && (
        <PromotionBlock padding='5px 10px 0' width='125px'>
          <Yellow />
          <Prom>
            <span>
              {props.item.promotionDescription}
            </span>
            <Image>
              <img src={props.item.promotionImage}/>
            </Image>
          </Prom>
        </PromotionBlock>
      )}

      {props.item.promotionType === 1 && (
        <PromotionBlock padding='30px 0 0' width='100px'>
          <PromText color='#000' bg='#FFD954' fs='12px' padding='7px 12px'>+5% годовых</PromText>
          <PromText color='#7e858c' fs='10px' padding='8px 10px 0 0' ml='8px'>Акция!</PromText>
        </PromotionBlock>
      )}

      <Img src={props.item.partnerLogo} />

      <InfoBlock>
        <Text fs='16px' fw='600' color='#282F36' mb='5px'>{props.item.name}</Text>
        <Text fs='14px' color='#282F36' mb='20px'>{props.item.shortDescripton}</Text>
        <Conditions>
          <ConditionBlock>
            <Text color='rgba(40, 47, 54, 0.3)' mb='5px' fs='14px'>Возраст</Text>
            <Text color='#282F36' fs='14px'>{props.item.minAge} - {props.item.maxAge} лет</Text>
          </ConditionBlock>

          <ConditionBlock>
            <Text color='rgba(40, 47, 54, 0.3)' mb='5px' fs='14px'>Срок погашения</Text>
            <Text color='#282F36' fs='14px'>
              от {props.item.minLoanTerm} мес - до {props.item.maxLoanTerm} мес
            </Text>
          </ConditionBlock>

          <ConditionBlock>
            <Text color='rgba(40, 47, 54, 0.3)' mb='5px' fs='14px'>Сумма</Text>
            <Text color='#282F36' fs='14px'>
              от {minSum(props.item.minAmount)} ₸ - до {maxSum(props.item.maxAmount)} ₸
            </Text>
          </ConditionBlock>

          <ConditionBlock>
            <Text color='rgba(40, 47, 54, 0.3)' mb='5px' fs='14px'>Ставка</Text>
            <Text color='#282F36' fs='14px'>{props.item.rate} %</Text>
          </ConditionBlock>
        </Conditions>
      </InfoBlock>

      <BtnWrap>
        <Link href={`
          /credit-registration?cid=${props.item.id}&sum=${
            props.loanAmount
          }&max=${props.item.maxAmount}&city=${props.url.query.city}
        `}>
          <Button color='#F18E67' width='200px'>
            Оформить
          </Button>
        </Link>

        <Link href={`
          credit-page?id=${props.item.id}&max=${props.item.maxAmount}&city=${props.url.query.city}&sumrange=${
            props.url.query.sumrange ? props.url.query.sumrange : 0
          }
        `}>
          <Button
            width='200px' fontColor='#77BEFF'
          >
            Подробнее
          </Button>
        </Link>
      </BtnWrap>
    </Wrap>
  )
}

export default LoanCard;