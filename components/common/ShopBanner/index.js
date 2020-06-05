import {
  Wrap,
  InfoBlock,
  Text
} from './style';

const ShopBanner = props => {
  return (
    <Wrap>
      <img src="https://unie-assets.ams3.digitaloceanspaces.com/finance/sections/shop.png" />
      <InfoBlock>
        <Text fs='18px' fw='bold' mb='5px'>Магазин</Text>
        <Text fs='14px' mb='20px'>Тысячи товаров из проверенных магазинов. Удобные способы оплаты: онлайн оплата, кредит и рассрочка.</Text>
        <a href="https://2step.me/"><Text fs='14px' color='#77BEFF'>Перейти</Text></a>
      </InfoBlock>
    </Wrap>
  )
}

export default ShopBanner;