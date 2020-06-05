import withData from '../../lib/apollo';
import { crumbs } from './crumbs';

import MainLayout from '../../components/common/MainLayout';
import Head from '../../components/head';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import AlreadySendBlock from '../../components/common/AlreadySendBlock';
import DosCreditCardBanner from '../../components/common/DosCreditCardBanner';

const AlreadySend = props => {
  return (
    <MainLayout noPreFooter>
      <Head 
        title="Финансы 2step - найдет все, то что потребуется"
        description="Оплачивайте важные покупки ежемесячными доступными платежами. 
                     Сравнивайте цены, экономьте время, покупайте с умом."
      />
      <BreadCrumbs crumbs={crumbs} />
      <AlreadySendBlock />
      <DosCreditCardBanner />

    </MainLayout>
  )
}

export default withData(AlreadySend);