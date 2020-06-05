import Link from 'next/link';

import Button from '../Button';

import {
  Wrap,
  TextBlock,
  Text,
  Img
} from './style';

const CalculatorBanner = props => {
  return (
    <Wrap>
      <TextBlock>
        <Text mb='8px'>Кредитный калькулятор</Text>
        <Text fs='14px' fw='normal' mb='30px'>Рассчитайте ставку и сумму кредита быстро и легко</Text>
        
        <Link href={`/credit-calculation?cid=${props.id}&max=${props.max}`}>
          <Button color='#F18E67' width='250px'>
            Расчет кредита
          </Button>
        </Link>

      </TextBlock>
      
      <Img src='https://unie-assets.ams3.digitaloceanspaces.com/finance/calculatoDesktop.png' />
    </Wrap>
  )
}

export default CalculatorBanner;