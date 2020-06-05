import withData from '../../lib/apollo';
import { crumbs } from './crumbs';
import { Query } from 'react-apollo';
import { GET_MORTGAGE } from './queries';

import MainLayout from '../../components/common/MainLayout';
import Head from '../../components/head';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import LoanPageMainInfo from '../../components/common/LoanPageMainInfo';
import LoanConditions from '../../components/common/LoanConditions';

const IpotekaPage = props => {
  return (
    <MainLayout noPreFooter>
      <Head 
        title={`Ипотека от банков: ипотечный кредит, ипотечное кредитование`}
        description="Получите ипотечный кредит. Сравните предложения от банков на калькуляторе и 
                     выберите заём с выгодными для вас условиями. Одобрение кредита за 2–5 дней."
      />
      <BreadCrumbs crumbs={crumbs} />
      <Query query={GET_MORTGAGE} variables={{id: props.url.query.id}}>
        {({loading, error, data}) => {
          if (loading) return <div />
          if (error) return <div>{error}</div>
          return (
            <React.Fragment>
              <LoanPageMainInfo data={data.getLoan} url={props.url} />
              <LoanConditions data={data.getLoan} />
            </React.Fragment>
          )
        }}
      </Query>
    </MainLayout>
  )
}

export default withData(IpotekaPage);