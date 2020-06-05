import { useState } from 'react';
import { GET_PERFECT, GET_CITIES } from './queries';
import withData from '../../lib/apollo';
import { Query } from 'react-apollo';
import { crumbs } from './crumbs';

import MainLayout from '../../components/common/MainLayout';
import Head from '../../components/head';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import LoanCalculateBlock from '../../components/common/LoanCalculateBlock';
import CalculateResultBlock from '../../components/common/CalculateResultBlock';
import ReturnPerfectLoan from '../../components/common/ReturnPerfectLoan';

import { Wrap, Wrapper } from './style';

const CreditCalculator = props => {
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [term, setTerm] = useState(0);
  const [city, setCity] = useState(0);
  const [perMonth, setPerMonth] = useState(0);
  const [overpay, setOverpay] = useState(0);
  const [paymentType, setPaymentType] = useState(0);

  let footer = `
    Воспользовавшись калькулятором кредита в режиме online, потенциальные заемщики смогут быстро сравнить условия получения ссуды в разных банках. Благодаря нашему сервису вы получите ценную информацию и примите правильное решение.<br/><br/>
    <h3 style='font-size:14px; padding:0;'>Сравните предложения от банков</h3>
    Наш сервис предлагает использовать кредитный калькулятор, доступный на бесплатной основе. Каждый потенциальный заемщик желает знать наверняка, в каком размере задолженность ему придется возвращать после начисления процентов. Реальные цифры многие финансовые учреждения стараются скрывать, предлагая клиентам познакомиться с договорами, условия которых понятны далеко не всем. Кроме того, они могут выполнять сложные расчеты, не позволяющие узнать достоверную информацию. Воспользовавшись кредитным калькулятором 2step, вы сможете избежать подобных ситуаций.<br/><br/>
    2step Финансы предлагает рассчитать условия кредитования в определенных финансовых организациях. Вы получите возможность узнать реальные цифры и определить, стоит обращаться в ту или иную компанию или банк. Кредитный калькулятор моментально рассчитает все необходимые финансовые показатели. Выгоду сотрудничества с нашим сервисом вы заметите, как только начнете пользоваться нашими услугами. Вам предоставлена уникальная возможность выбрать лучшие предложения от банков Казахстана и заключить взаимовыгодную сделку.
  `

  return (
    <MainLayout footer={footer}>
      <Head title="Кредитный калькулятор в банках Казахстана 〶 на 2step.me"
        description="Рассчитайте ставку и сумму кредита быстро и легко. 
                     ➜ Сравните предложения от банков и выберите выгодные 
                     для вас условиями. Подбор кредита по ставкам, 
                     сумме займа, сроков и рассмотрение заявки."
      />
      <BreadCrumbs crumbs={crumbs} />
      <Query query={GET_CITIES}>
        {({loading, error, data}) => {
          if (loading) return <div />
          if (error) return <div>{error}</div>
          return (
            <LoanCalculateBlock 
              amount={amount} rate={rate} term={term} city={city} cities={data.cities}
              setAmount={setAmount} setRate={setRate} setTerm={setTerm} setCity={setCity}
              perMonth={perMonth} setPerMonth={setPerMonth} overpay={overpay} setOverpay={setOverpay}
              setPaymentType={setPaymentType} paymentType={paymentType} url={props.url}
            />
          )
        }}
      </Query>
      <CalculateResultBlock perMonth={perMonth} overpay={overpay} />
      {perMonth !== 0 && (
        <Query query={GET_PERFECT} variables={{
          amount: amount,
          loanTerm: 3,
          loanTypeId: 6,
          city: 1
        }}>
          {({loading, error, data}) => {
            if (loading) return <div />
            if (error) return <Wrap><Wrapper>Подходящих кредитов к сожалению нет</Wrapper></Wrap>
            return <ReturnPerfectLoan data={data.filterPerfectLoans} url={props.url} amount={amount} />
          }}
        </Query>
      )}
    </MainLayout>
  )
}

export default withData(CreditCalculator);