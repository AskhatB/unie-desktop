import Link from 'next/link';

import Button from '../Button';

import {
  Wrap,
  Img,
  Title,
  Info,
  Block,
  Text,
  ButtonWrap,
  CardImg
} from './style';

const CreditCardCard = props => {
  return (
    <Wrap>
      <CardImg src={props.data.cardLogo} />
      <Img src={props.data.partnerLogo} />
      <Title>{props.data.name}</Title>
      <Info>
        <Block>
          <Text color='rgba(40, 47, 54, 0.3)' fs='14px' mb='6px'>процентная ставка</Text>
          <Text fs='14px' color='#282F36'>{props.data.gesv}%</Text>
        </Block>

        <Block>
          <Text color='rgba(40, 47, 54, 0.3)' fs='14px' mb='6px'>льготный период</Text>
          <Text fs='14px' color='#282F36'> до {props.data.gracePeriod} дней</Text>
        </Block>

        <Block>
          <Text color='rgba(40, 47, 54, 0.3)' fs='14px' mb='6px'>лимит</Text>
          <Text fs='14px' color='#282F36'>{props.data.maxAmount} ₸</Text>
        </Block>

        <Block>
          <Text color='rgba(40, 47, 54, 0.3)' fs='14px' mb='6px'>стоимость обслуживания</Text>
          <Text fs='14px' color='#282F36'>от {props.data.maintenanceCost} ₸</Text>
        </Block>
      </Info>

      <ButtonWrap>
        <Link href={`/creditcard-page?id=${props.data.id}`}>
          <Button width='190px' color='#F18E67' height='40px'>
            Оформить заявку
          </Button>
        </Link>

        <Link href={`/creditcard-page?id=${props.data.id}`}>
          <Button width='190px' height='40px' fontColor='#77BEFF'>
            подробнее
          </Button>
        </Link>
      </ButtonWrap>
    </Wrap>
  )
}

export default CreditCardCard;