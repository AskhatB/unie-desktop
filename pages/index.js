import {Query} from 'react-apollo';
import withData from '../lib/apollo';

import MainLayout from '../components/common/MainLayout';
import MainFinanceAction from '../components/common/MainFinanceAction';
import HorizontalCategory from '../components/finance/HorizontalCategory';
import PartnersBlock from '../components/finance/PartnersBlock';
import WhyUnie from '../components/common/WhyUnie';
import MainCreditList from '../components/common/MainCreditList';
import MainInsuranceBanners from '../components/common/MainInsuranceBanners';
import MainCalculatorBlock from '../components/common/MainCalculatorBlock';
import Carousel from '../components/common/Carousel';

import Head from '../components/head';
import { GET_PARTNERS } from './queries';

import { Wrap } from './style';

const Finance = props => {
  let footer = `
    2step Сервис интегрировал сотни интернет-магазинов и финансовых продуктов.<br/><br/>
    Мы работаем только с теми отраслями, которые повышают качество жизни покупателей:<br/><br/>
    <h3 style='font-size:14px;padding:0;margin:0'>Подбор и сравнение кредитов, автокредитов, ипотеки, страховых услуг</h3> <br/>
    Платформа, которая объединяет финансовые продукты и сервисы банков Казахстана. 2step Финансы помогаем найти выгодное решение кредитования, страховых услуг, кредитных или дебетовых карт. Сервис сравнивает условия в разных банках, делает подбор процентных ставок, сумме займа, сроков и рассмотрение заявки. С нами – выгодно.
  ` 

  if(typeof window === 'undefined') return <div />
  return (
    <MainLayout footer={footer}>
      <Head 
        title="Подбор и сравнение кредитов, автокредитов, ипотеки, страховых услуг 〶 2step Финансы" 
        description="Расчет и оформление банковских онлайн кредитов в Казахстане. 
                    ✔Рейтинги банков, кредитов и автострахований. Курс валют. 
                    〶 Платформа, которая объединяет финансовые продукты и сервисы банков Казахстана."
      />
      <Wrap>
        <MainFinanceAction window={window} />
        {/* <Carousel /> */}
        <HorizontalCategory />
        <Query query={GET_PARTNERS}>
          {({loading, error, data}) => {
            if(loading) return <div />
            if(error) return <div>{error}</div>
            return(
              <PartnersBlock partners={data.partners} />
            );
          }}
        </Query>
        <WhyUnie />
        <MainCreditList />
        <MainInsuranceBanners />
        <MainCalculatorBlock />
      </Wrap>
    </MainLayout>
  );
};

export default withData(Finance);
