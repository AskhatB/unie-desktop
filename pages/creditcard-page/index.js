import { useState } from 'react';
import withData from '../../lib/apollo';
import { crumbs } from './crumbs';
import { prefooter } from './prefooter';
import { CARD  } from './queries';
import { Query } from 'react-apollo';

import MainLayout from '../../components/common/MainLayout';
import Head from '../../components/head';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import CreditCardMainInfo from '../../components/common/CreditCardMainInfo';
import CreditCardSecondaryInfo from '../../components/common/CreditCardSecondaryInfo';
import CreditCardRegistration from '../../components/common/CreditCardRegistration';

import {
  Wrap
} from './style';

const CreditCard = props => {
  const [cartAmount, setCartAmount] = useState(0);
  const [IIN, setIIN] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [check, setCheck] = useState(false);
  const [btnOff, setBtnOff] = useState(false);
  const [phoneValidation, setPhoneValidation] = useState(true);
  const [emailValidation, setEmailValidation] = useState(true);
  const [iinValidation, setIinValidation] = useState(true);

  if(typeof window === 'undefined') return <div />
  return(
    <MainLayout footer={prefooter}>
      <Head 
        title="Кредитная карточка 'Дос'"
        description="До 62 дней без процентов. Гибкая рассрочка до 12 месяцев. 
                     Решение за 5 минут. Кешбэки до 10%. Заявка онлайн!"
      />
      <Wrap>
        {/* хлебные крошки */}
        <BreadCrumbs crumbs={crumbs} />
        <Query query={CARD} variables={{id: parseInt(props.url.query.id)}}>
          {({loading, error, data}) => {
            if (loading) return <div />
            if (error) return <div>{error}</div>
            return (
              <React.Fragment>
                <CreditCardMainInfo window={window} data={data.getCreditCard} />
                <CreditCardSecondaryInfo data={data.getCreditCard} />
                <CreditCardRegistration cartAmount={cartAmount} setCartAmount={setCartAmount} 
                  IIN={IIN} setIIN={setIIN} email={email} setEmail={setEmail} btnOff={btnOff} 
                  phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} url={props.url}
                  check={check} setCheck={setCheck} data={data.getCreditCard} setBtnOff={setBtnOff}
                  setPhoneValidation={setPhoneValidation} phoneValidation={phoneValidation}
                  emailValidation={emailValidation} setEmailValidation={setEmailValidation}
                  iinValidation={iinValidation} setIinValidation={setIinValidation} 
                />
              </React.Fragment>
            )
          }}
        </Query>
      </Wrap>
    </MainLayout>
  )
}

export default withData(CreditCard);