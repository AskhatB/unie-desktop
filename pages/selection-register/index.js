import { useState } from 'react';
import withData from '../../lib/apollo';
import { crumbs } from './crumbs';
import { data } from './data';
import { Query, ApolloConsumer } from 'react-apollo';
import { CITIES, SCORING, SEND_FOR_ALL_BANKS } from './queries';
import Router from 'next/router';

import MainLayout from '../../components/common/MainLayout';
import Head from '../../components/head';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import SelectionCreditInfo from '../../components/common/SelectionCreditInfo';
import SelectionFamilyInfo from '../../components/common/SelectionFamilyInfo';
import SelectionСareerInfo from '../../components/common/SelectionСareerInfo';
import SelectionHistoryInfo from '../../components/common/SelectionHistoryInfo';
import SelectionContactInfo from '../../components/common/SelectionContactInfo';
import Button from '../../components/common/Button';

import { ButtonWrapper, WidthWrap } from './style';

const SelectionRegister = props => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState(5);
  const [term, setTerm] = useState(8);
  const [marital, setMarital] = useState(5);
  const [children, setChildren] = useState(5);
  const [workExperience, setWorkExprience] = useState(7);
  const [position, setPosition] = useState(9);
  const [pension, setPension] = useState(6);
  const [salary, setSalary] = useState(7);
  const [income, setIncome] = useState(3);
  const [incomeSumm, setIncomeSumm] = useState(''); 
  const [earlier, setEarlier] = useState(3);
  const [delay, setDelay] = useState(3);
  const [delayDuration, setDelayDuration] = useState(4);
  const [creditNow, setCreditNow] = useState(2);
  const [creditPayment, setCreditPayment] = useState(4);
  const [haveDelayNow, setHaveDelayNow] = useState(2);
  const [city, setCity] = useState(0);
  const [cityId, setCityId] = useState(0);
  const [IIN, setIIN] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [check, setCheck] = useState(false);

  return (
    <MainLayout noPreFooter>
      <Head title='Подобрать кредит' description='Подобрать кредит' />
      <BreadCrumbs crumbs={crumbs} />
      {step === 1 && (
        <SelectionCreditInfo data={data} setAmount={setAmount} amount={amount}
          setTerm={setTerm} term={term} setStep={setStep} step={step}
        />
      )}

      {step === 2 && (
        <SelectionFamilyInfo data={data} marital={marital} setMarital={setMarital}
          children={children} setChildren={setChildren} step={step} setStep={setStep}
        />
      )}

      {step === 3 && (
        <SelectionСareerInfo data={data} step={step} setStep={setStep} 
          workExperience={workExperience} setWorkExprience={setWorkExprience}
          position={position} setPosition={setPosition} pension={pension} setPension={setPension}
          salary={salary} setSalary={setSalary} income={income} setIncome={setIncome}
          incomeSumm={incomeSumm} setIncomeSumm={setIncomeSumm}
        />
      )}

      {step === 4 && (
        <SelectionHistoryInfo data={data} earlier={earlier} setEarlier={setEarlier} step={step}
          delay={delay} setDelay={setDelay} delayDuration={delayDuration} setDelayDuration={setDelayDuration}
          creditNow={creditNow} setCreditNow={setCreditNow} creditPayment={creditPayment} setStep={setStep}
          setCreditPayment={setCreditPayment} haveDelayNow={haveDelayNow} setHaveDelayNow={setHaveDelayNow}
        />
      )}

      {step === 5 && (
        <Query query={CITIES}>
          {({loading, error, data}) => {
            if (loading) return <div />
            if (error) return <div>{error}</div>
            return (
              <React.Fragment>
                <SelectionContactInfo IIN={IIN} setIIN={setIIN} email={email} cities={data.getCities}
                  setEmail={setEmail} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
                  check={check} setCheck={setCheck} city={city} setCity={setCity}
                />
                <ButtonWrapper>
                  <WidthWrap>
                    <ApolloConsumer>
                      {client => {
                        return (
                          <Button color='#F18E67' bottom='10px'
                            onClick={async () => {
                              await client.query({
                                query: SCORING,
                                variables: {
                                  fio: localStorage.getItem('fio'),
                                  iin: IIN,
                                  city: city,
                                  phone: phoneNumber,
                                  martialStatus: marital,
                                  kids: children,
                                  workExperience: workExperience,
                                  position: position,
                                  pension: pension,
                                  wage: salary,
                                  additionalIncome: incomeSumm ? incomeSumm : income,
                                  loansBefore: earlier,
                                  loanOverdue: earlier === 0 ? delay : 10,
                                  loanOverduePeriod: delay === 0 ? delayDuration: 10,
                                  loanNow: creditNow,
                                  loanNowPayment: creditNow === 0 ? creditPayment : 10,
                                  loanNowOverdue: creditNow === 0 ? haveDelayNow : 10
                                }
                              }).then (res => {
                                if (res.data.scoringHandler.status === 'SUCCESS') {
                                  client.mutate({
                                    mutation: SEND_FOR_ALL_BANKS,
                                    variables: {
                                      fio: localStorage.getItem('fio'),
                                      email: email,
                                      phone: phoneNumber.replace(/[^0-9\.]+/g,''),
                                      city: data.getCities[city].name,
                                      cityId: data.getCities[city].id,
                                      iin: IIN,
                                      creditItemAmount: parseInt(res.data.scoringHandler.amount),
                                      creditItemTerm: res.data.scoringHandler.term
                                    }
                                  }).then(res => {
                                    Router.push('/access-page');
                                  })
                                } else if (res.data.scoringHandler.status === 'REJECT') {
                                  Router.push('/denied-page');
                                }
                              })
                            }}
                          >
                            Оформить
                          </Button>
                        )
                      }}
                    </ApolloConsumer>

                    <Button fontColor='#F18E67' border='1px solid #F18E67'
                      onClick={() => setStep(step - 1)}
                    >
                      Назад
                    </Button>
                  </WidthWrap>
                </ButtonWrapper>
              </React.Fragment>
            )
          }}
        </Query>
      )}
    </MainLayout>
  )
}

export default withData(SelectionRegister);