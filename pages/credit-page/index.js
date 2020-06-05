import { LOAN } from './queries';
import withData from '../../lib/apollo';
import { Query } from 'react-apollo';
import { crumbs } from './crumbs';

import MainLayout from '../../components/common/MainLayout';
import Head from '../../components/head';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import LoanPageMainInfo from '../../components/common/LoanPageMainInfo';
import LoanConditions from '../../components/common/LoanConditions';
import LoanGuidePage from '../../components/common/LoanGuidePage';

const CreditPage = props => {
  return (
    <MainLayout>
      <Query query={ LOAN }
        variables={{ id: parseInt(props.url.query.id) }}
      >
        {({loading, error, data}) => {
          if (loading) return <div />
          if (error) return <div>{error}</div>
          return (
            <React.Fragment>
              <Head 
                title={`${data.getLoan.name} | Финансы 2step - найдет все, то что потребуется`}
                description={data.getLoan.description}
              />
              <BreadCrumbs crumbs={crumbs} />
              <LoanPageMainInfo data={data.getLoan} url={props.url} />
              <LoanConditions data={data.getLoan} cid={props.url.query.id} />
              <LoanGuidePage data={data.getLoan} />
            </React.Fragment>
          )
        }}
      </Query>
    </MainLayout>
  )
}

export default withData(CreditPage);