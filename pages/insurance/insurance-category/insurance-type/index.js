import { useState } from 'react';
import withData from '../../../../lib/apollo';
import { Query } from 'react-apollo';
import { CITIES } from './queries';
import { crumbs } from './crumbs';
import CityTranslit from '../../../../components/common/CityTranslit';

import MainLayout from '../../../../components/common/MainLayout';
import Head from '../../../../components/head';
import BreadCrumbs from '../../../../components/common/BreadCrumbs';
import ContactData from '../../../../components/common/ContactData';
import InsuranceTypeRegistration from '../../../../components/common/InsuranceTypeRegistration';

import { Wrap, Title } from './style';

const InsuranceType = props => {
  const [step, setStep] = useState(0);
  const [city, setCity] = useState(0);
  const [IIN, setIIN] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [check, setCheck] = useState(false);
  const [contactData, setContactData] = useState({});
  const [phoneValidation, setPhoneValidation] = useState(true);
  const [emailValidation, setEmailValidation] = useState(true);
  const [iinValidation, setIinValidation] = useState(true);

  return(
    <MainLayout noPreFooter>
      <Head
        title="Финансы 2step - найдет все, то что потребуется"
        description="Оплачивайте важные покупки ежемесячными доступными платежами. 
                     Сравнивайте цены, экономьте время, покупайте с умом."
      />
      <BreadCrumbs crumbs={crumbs} />
      <Query query={CITIES}>
        {({loading, error, data}) => {
          if(loading) return <div />
          if(error) return <div>{error}</div>
          return (
            <Wrap>
              <Title>
                {CityTranslit(props.url.query.type)} в г.{data.getCities[city].name}({step + 1} шаг из 2)
              </Title>
              {step === 0 && ( 
                <ContactData cities={data.getCities} setContactData={setContactData}
                  city={city} setCity={setCity} IIN={IIN} setIIN={setIIN} setStep={setStep}
                  phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} step={step} 
                  email={email} setEmail={setEmail} check={check} setCheck={setCheck} 
                  catName={CityTranslit(props.url.query.name)} prodName={CityTranslit(props.url.query.type)} 
                  regCity={data.getCities[city].name} 
                  setPhoneValidation={setPhoneValidation} phoneValidation={phoneValidation}
                  emailValidation={emailValidation} setEmailValidation={setEmailValidation}
                  iinValidation={iinValidation} setIinValidation={setIinValidation}
                />
              )}
              {step === 1 && (
                <InsuranceTypeRegistration
                  name={props.url.query.type} step={step} setStep={setStep} contactData={contactData}
                  cities={data.getCities} city={city}
                />
              )}  
            </Wrap>
      )}}
      </Query>
    </MainLayout>
  )
}

export default withData(InsuranceType);