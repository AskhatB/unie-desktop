import { useState } from 'react';
import withData from '../../lib/apollo';
import { crumbs } from './crumbs';
import { LOAN } from './queries';
import { Query } from 'react-apollo';

import MainLayout from '../../components/common/MainLayout';
import Head from '../../components/head';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import CalculationBlock from '../../components/common/CalculationBlock';
import ResultBlock from '../../components/common/ResultBlock';

const CreditCalculation = props => {
  const [amount, setAmount] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [perMonth, setPerMonth] = useState(0);
  const [overpay, setOverpay] = useState(0);

  return (
    <MainLayout noPreFooter>
      <Head 
        title="Финансы 2step - найдет все, то что потребуется" 
        description="Оплачивайте важные покупки ежемесячными доступными платежами. 
                     Сравнивайте цены, экономьте время, покупайте с умом."
      />
      <BreadCrumbs crumbs={crumbs} />
      <Query query={LOAN}
        variables={{id: props.url.query.cid}}
      >
        {({loading, error, data}) => {
          if (loading) return <div />
          if (error) return <div>{error}</div>
          return (
            <React.Fragment>
              <CalculationBlock data={data.getLoan} amount={amount} setAmount={setAmount} 
                loanTerm={loanTerm} setLoanTerm={setLoanTerm} setPerMonth={setPerMonth}
                setOverpay={setOverpay}
              />

              <ResultBlock perMonth={perMonth} overpay={overpay} data={data.getLoan} amount={amount} />
            </React.Fragment>
          )
        }}
      </Query>
    </MainLayout>
  )
}

export default withData(CreditCalculation);