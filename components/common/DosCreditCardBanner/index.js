import Link from 'next/link';

import Button from '../Button';

import {
  Wrap,
  Wrapper,
  TextBlock,
  Text,
  Img,
  AdvantageList,
  Square
} from './style';

const DosCreditCardBanner = props => {
  return (
    <Wrap>
      <Wrapper>
        <TextBlock>
          <Text fs='14px' mb='13px' color='rgba(40, 47, 54, 0.3)'>Мы предлагаем</Text>
          <Text fs='20px' mb='20px' fw='bold'>Кредитная карта Дос</Text>
          <AdvantageList>
            <Square />
            <Text>Льготный период до 62 дней</Text>
          </AdvantageList>

          <AdvantageList>
            <Square />
            <Text>Гибкая рассрочка до 12 месяцев</Text>
          </AdvantageList>

          <AdvantageList>
            <Square />
            <Text>Кешбэк до 10%</Text>
          </AdvantageList>

          <AdvantageList mb='30px'>
            <Square />
            <Text>Снятие по всему миру 0%</Text>
          </AdvantageList>
          
          <Link href='/creditcard-page?id=1'>
            <Button color='#77BEFF'>
              Подробнее
            </Button>
          </Link>
        </TextBlock>
        <Img src='https://unie-assets.ams3.digitaloceanspaces.com/finance/doscreditcard.png' />
      </Wrapper>
    </Wrap>
  )
}

export default DosCreditCardBanner;