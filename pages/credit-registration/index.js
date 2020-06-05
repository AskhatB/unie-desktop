import { useState } from 'react';
import withData from '../../lib/apollo';
import { crumbs } from './crumbs';
import { LOAN } from './queries';
import { Query } from 'react-apollo';

import MainLayout from '../../components/common/MainLayout';
import Head from '../../components/head';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import LoanRegistration from '../../components/common/LoanRegistration';
import LoanRegistrationStep1 from '../../components/common/LoanRegistrationStep1';
import LoanRegistrationStep2 from '../../components/common/LoanRegistrationStep2';
import Loader from '../../components/common/Loader';

const CreditRegistration = props => {
  const [perMonth, setPerMonth] = useState(0);
  const [amount, setAmount] = useState(props.url.query.sum ? props.url.query.sum : 0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [registrationStep, setRegistrationStep] = useState(1);
  const [loader, setLoader] = useState(false);

  // формула расчета кредита (слава Асхату)
  const annuity = (rate, amount, period) => {
    const loanAmount = amount
    const loanTerm = period
    const gesv = rate / 100
    let annuity = loanAmount * ( ( gesv / 12 ) / ( 1 - Math.pow( ( 1 + ( gesv / 12 ) ), loanTerm * (-1))))
    const monthlyPayment =  annuity.toFixed(2)
    let monthlyPayments = []
    monthlyPayments.push(monthlyPayment)
    
    return monthlyPayments[0]
  }

  return (
    <MainLayout noPreFooter>
      <Head 
        title="Финансы 2step - найдет все, то что потребуется"
        description="Оплачивайте важные покупки ежемесячными доступными платежами. 
                      Сравнивайте цены, экономьте время, покупайте с умом."
      />
      <BreadCrumbs crumbs={crumbs} />
      <Query query={LOAN} variables={{id: props.url.query.cid}}>
        {({loading, error, data}) => {
          if (loading) return <div />
          if (error) return <div>{error}</div>
          return (
            <React.Fragment>
              {loader && <Loader />}
              <LoanRegistration data={data.getLoan} perMonth={perMonth} amount={amount}
                annuity={annuity} registrationStep={registrationStep} loanTerm={loanTerm} 
              />
              {registrationStep === 1 && (
                <LoanRegistrationStep1 data={data.getLoan} amount={amount} loanTerm={loanTerm} 
                  setAmount={setAmount} setLoanTerm={setLoanTerm}
                  registrationStep={registrationStep} setRegistrationStep={setRegistrationStep}
                />
              )}
              {registrationStep === 2 && (
                <LoanRegistrationStep2 data={data.getLoan} setRegistrationStep={setRegistrationStep}
                  amount={amount} url={props.url.query} loanTerm={loanTerm} registrationStep={registrationStep}
                  setLoader={setLoader}
                />
              )}
            </React.Fragment>
          )
        }}
      </Query>
    </MainLayout>
  )
}

export default withData(CreditRegistration);