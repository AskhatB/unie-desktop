import withData from '../../lib/apollo';
import { crumbs } from './crumbs';
import { GET_CREDIT_CARDS } from './queries';
import { Query } from 'react-apollo';

import MainLayout from '../../components/common/MainLayout';
import Head from '../../components/head';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import CreditCardCard from '../../components/common/CreditCardCard';

import { Title, Wrap, Wrapper } from './style';

const CreditCards = props => {
  return (
    <MainLayout>
      <Head 
        title='Кредитные карты' 
        description='Кредитные карты'
      />
      <BreadCrumbs crumbs={crumbs} />
      <Wrap>
        <Wrapper>
          <Title>Кредитные карты</Title>
          <Query query={GET_CREDIT_CARDS}>
            {({loading, error, data}) => {
              if (loading) return <div />
              if (error) return <div>{error}</div>
              return (
                data.getCreditCards.map(item => {
                  return <CreditCardCard data={item} key={item.id} />
                })
              )
            }}
          </Query>
        </Wrapper>
      </Wrap>
    </MainLayout>
  )
}

export default withData(CreditCards);