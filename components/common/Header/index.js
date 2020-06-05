import ExchangeBlock from '../../finance/ExchangeBlock';
import CityTranslit from '../CityTranslit';
import Link from 'next/link';
import {
  Wrap,
  Layout,
  TopHeader,
  ServiceList,
  Name,
  HeadersCategory,
  Wrapper,
  Img,
  CategoryName
} from './style';

const Header = props => {
  if (typeof window === 'undefined') return <div />

  const data = [
    {name: 'Онлайн кредиты', link: `/credit?type=kredit&city=${
      localStorage.getItem('cityIdx') ? (
        CityTranslit(props.cities[localStorage.getItem('cityIdx')].name)
      ) : 'almaty'
    }`},
    {name: 'Микрокредиты', link: '/microcredit?city=almaty'},
    {name: 'Дебетовые карты', link: '/debit-card'},
    {name: 'Кредитные Карты', link: '/credit-cards'},
    {name: 'Страхование', link: '/insurance/insurance-category?name=nomad'},
    // {name: 'Ипотека', link: `/ipoteka?type=ipoteka&city=${
    //   localStorage.getItem('cityIdx') ? (
    //     CityTranslit(props.cities[localStorage.getItem('cityIdx')].name)
    //   ) : 'almaty'
    // }`},
    {name: 'Кредитный калькулятор', link: '/credit-calculator'}
  ]


  return (
    <Wrap>
      <Layout>
        <TopHeader >
          <ServiceList>
            <Link href='/'>
              <Name mr='40px' bt='3px solid #77BEFF'>Финансы</Name>
            </Link>
            <a href="https://2step.me/"><Name bt='3px solid #f8f8f8'>Маркет</Name></a>
          </ServiceList>
          <ExchangeBlock />
        </TopHeader>
        <HeadersCategory>
          <Wrapper>
            <Link href='/'>
              <Img src='/static/logo.svg' />
            </Link>
            {data.map((item, idx) => {
              return(
                <Link href={item.link}>
                  <CategoryName key={idx}>{item.name}</CategoryName>
                </Link>
              )
            })}
          </Wrapper>
        </HeadersCategory>
      </Layout>
    </Wrap>
  )
}

export default Header
