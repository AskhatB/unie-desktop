import withData from '../../../lib/apollo';
import {crumbs} from './crumbs';
import {prefooter} from './prefooter';

import MainLayout from '../../../components/common/MainLayout';
import Head from '../../../components/head';
import BreadCrumbs from '../../../components/common/BreadCrumbs';
import InsuranceDescription from '../../../components/common/InsuranceDescription';
import InsuranceCategories from '../../../components/common/InsuranceCategories';

import {
  Wrap
} from './style';

const InsuranceCategory = props => {

  return (
    <MainLayout footer={prefooter}>
      <Head 
        title="Все виды страхования 〶 на 2step.me"
        description="Сервис по выбору и оформлению страхования. ➜ 
                     Выберите страхование с выгодными условиями. Оформите страховку по 
                     интернету, без комиссий по электронной почте или с доставкой на дом."
      />
      <BreadCrumbs crumbs={crumbs} />
      <Wrap>
        <InsuranceDescription />
        <InsuranceCategories url={props.url.pathname} />
      </Wrap>
    </MainLayout>
  )
}

export default withData(InsuranceCategory)
