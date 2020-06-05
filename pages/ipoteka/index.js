import { useState } from 'react';
import withData from '../../lib/apollo';
import { crumbs } from './crumbs';
import { GET_CITIES } from './queries';
import { Query } from 'react-apollo';
import { prefooter } from './prefooter';

import MainLayout from '../../components/common/MainLayout';
import Head from '../../components/head';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import MortgageFilter from '../../components/common/MortgageFilter';
import MortgageList from '../../components/common/MortgageList';

const Ipoteka = props => {
  const [amount, setAmount] = useState(0);
  const [initialFee, setInitialFee] = useState(0);
  const [term, setTerm] = useState(0);
  const [city, setCity] = useState(0);
  const [perMonth, setPerMonth] = useState(0);
  const [overpay, setOverpay] = useState(0);

  return (
    <MainLayout creditType={prefooter} city={props.url.query.city} >
      <Head 
        title={`Ипотека от банков: ипотечный кредит, ипотечное кредитование`}
        description="Получите ипотечный кредит. Сравните предложения от банков на калькуляторе и 
                     выберите заём с выгодными для вас условиями. Одобрение кредита за 2–5 дней."
      />
      <BreadCrumbs crumbs={crumbs} />
      <Query query={GET_CITIES}>
        {({loading, error, data}) => {
          if (loading) return <div />
          if (error) return <div>{error}</div>
          return (
            <React.Fragment>
              <MortgageFilter 
                url={props.url} amount={amount} setAmount={setAmount} cities={data.cities}
                initialFee={initialFee} setInitialFee={setInitialFee} term={term} setTerm={setTerm}
                city={city} setCity={setCity} setPerMonth={setPerMonth} setOverpay={setOverpay}
              />
              <MortgageList 
                perMonth={perMonth} overpay={overpay} amount={amount}
                city={data.cities[city].name}
              />
            </React.Fragment>
          )
        }}
      </Query>
    </MainLayout>
  )
}

export default withData(Ipoteka);