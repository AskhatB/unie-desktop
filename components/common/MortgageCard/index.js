import Link from 'next/link';
import toValidCost from '../toValidCost';
import cityTranslit from '../CityTranslit';

import Button from '../Button';

import {
  Wrap,
  Img,
  MortgageInfo,
  Text,
  InfoBlock,
  Block,
  ButtonWrap,
} from './style';

const MortgageCard = props => {
  return (
    <Wrap>
      <Img src={props.data.partnerLogo} />
      
      <MortgageInfo>
        <Text fw='bold' fs='16px' color='#282F36' mb='20px'>{props.data.name}</Text>
        <InfoBlock>
          <Block>
            <Text fs='14px' color='rgba(40, 47, 54, 0.3)' mb='5px'>ГЭСВ</Text>
            <Text fs='14px' color='#282F36' fw='600'>{props.data.gesv} %</Text>
          </Block>

          <Block>
            <Text fs='14px' color='rgba(40, 47, 54, 0.3)' mb='5px'>Платеж</Text>
            <Text fs='14px' color='#282F36' fw='600'>{toValidCost(props.perMonth)} ₸</Text>
          </Block>

          <Block>
            <Text fs='14px' color='rgba(40, 47, 54, 0.3)' mb='5px'>Переплата</Text>
            <Text fs='14px' color='#282F36' fw='600'>{toValidCost(props.overpay)} ₸</Text>
          </Block>
        </InfoBlock>
      </MortgageInfo>
      
      <ButtonWrap>
        <Button color='#F18E67' width='200px'>
          Оформить
        </Button>

        <Link href={`/ipoteka-page?id=${props.data.id}&max=${props.amount}&city=${cityTranslit(props.city)}`}>
          <Button fontColor='#77BEFF' width='200px'>
            Подробнее
          </Button>
        </Link>
      </ButtonWrap>
    </Wrap>
  )
}

export default MortgageCard;