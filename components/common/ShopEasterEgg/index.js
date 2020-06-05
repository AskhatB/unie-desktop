import ShopBanner from '../ShopBanner';

import {
  Wrap,
  Text
} from './style';

const ShopEasterEgg = props => {
  return(
    <Wrap>
      <ShopBanner />
      <Text fs='16px' fw='bold' mb='10px'>Покупайте выгодно!</Text>
      <Text color='#282F36' fs='14px'>Будьте в курсе акций, новинок, распродаж и скидок</Text>
    </Wrap>
  )
}

export default ShopEasterEgg;