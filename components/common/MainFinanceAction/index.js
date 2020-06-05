import Link from 'next/link';

import Button from '../Button';

import {
  Wrap,
  FinancecInfoSide,
  Text,
  Img,
  Title
} from './style';

const MainFinanceAction = props => {

  return(
    <Wrap>
      <FinancecInfoSide>
        <Title> 
          Подбор и сравнение кредитов, <br/> дебетовых и кредитных карт
        </Title>
        <Text>
          Платформа, которая объединяет финансовые продукты <br/> и сервисы банков Казахстана
        </Text>
        <Link href='/credit?type=kredit&city=almaty'>
          <Button
            width='250px' height='50px' color='#F18E67' bs='4px 6px 10px rgba(241, 142, 103, 0.2)'
            round='5px'
          >
            Подобрать кредит
          </Button>
        </Link>
        <Img src='https://unie-assets.ams3.digitaloceanspaces.com/compImg/desktop/financeMain.png' />
      </FinancecInfoSide>
    </Wrap>
  )
}

export default MainFinanceAction;