import withData from '../../lib/apollo';

import MainLayout from '../../components/common/MainLayout';
import Head from '../../components/head';
import {
  Wrap,
  Wrapper,
  Text,
  Block,
  Square
} from './style';

const AboutPage = props => {
  return(
    <MainLayout noPreFooter>
      <Head title='2step.me' />
      <Wrap>
        <Wrapper>
          <Text fw='bold' fs='18px' color='#282F36' mb='15px'>
            2step Service интегрировал сотни интернет-магазинов и финансовых продуктов. 
          </Text>
          <Text fs='14px' color='#282F36' mb='15px'>
            Мы работаем только с теми отраслями, которые повышают качество жизни покупателей: 
          </Text>
          <a href='https://2step.me/'>
            <Text fs='16px' fw='600' color='#77BEFF' td='underline' mb='15px'>
              2step Магазин      
            </Text>
          </a>
          <Block>
            <Square />
            <Text fs='14px' color='#282F36'>
              Маркетплейс и платежный сервис на одном сайте, который позволяет покупателю 
              оплатить покупку онлайн с помощью банковской карты, в рассрочку или кредит. 
            </Text>
          </Block>
          <Block>
            <Square />
            <Text fs='14px' color='#282F36'>
              Оплачивайте покупки доступными ежемесячными платежами. 
              Сравнивайте цены, экономьте время, покупайте с умом.
            </Text>
          </Block>
          <Text fs='16px' fw='600' color='#77BEFF' td='underline' mb='15px'>
            Финансовая платформа 2step Финансы
          </Text>
          <Block>
            <Square />
            <Text fs='14px' color='#282F36'>
            Платформа, которая объединяет финансовые продукты и сервисы банков Казахстана.
            </Text>
          </Block>
          <Block>
            <Square />
            <Text fs='14px' color='#282F36'>
            Платежный сервис подбирает кредиты, депозиты, банковские карты и страховые услуги. Выбирайте удобные для вас условия.
            </Text>
          </Block>
          <Text fw='bold' fs='16px' color='#282F36' mb='15px' mt='15px'>Контакты</Text>
          <Text fs='14px' mb='15px'>г. Алматы, ул. Розыбакиева 289/9, блок 6</Text>
          <Text fs='14px'>+7 727 328 12 13</Text>
          <Text fs='14px'>+7 708 223 14 24</Text>
        </Wrapper>
      </Wrap>
    </MainLayout>
  );
};

export default withData(AboutPage);