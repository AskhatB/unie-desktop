import { useState } from 'react';
import { data } from './data';
import { CREATE_INSURANCE, CREATE_INSURANCE_ORDER } from '../../../pages/insurance/insurance-category/insurance-type/queries';
import { ApolloConsumer } from 'react-apollo';
import Router from 'next/router';

import RadioBtn from '../RadioBtn';
import Button from '../Button';

import {
  Wrap,
  Text,
  RadioWrap,
  Btn
} from './style';

const PreProperty = props => {
  const [insurPackage, setInsurPackage] = useState(0);

  let myJson = Object.assign(
    {},
    props.contactData,
    {
      insuranceAmount: data[insurPackage].amount,
      insurancePackageType: data[insurPackage].name,
      insurancePayment: data[insurPackage].payment
    }
  )

  return (
    <Wrap>
      <Text>Страховой пакет</Text>
      <RadioWrap onClick={() => setInsurPackage(0)}>
        <RadioBtn checked={insurPackage == 0}>Стандарт</RadioBtn>
      </RadioWrap>
      
      <RadioWrap onClick={() => setInsurPackage(1)}>
        <RadioBtn>Комфорт</RadioBtn>
      </RadioWrap>
      
      <RadioWrap onClick={() => setInsurPackage(2)} mb='30px'>
        <RadioBtn>Премиум</RadioBtn>
      </RadioWrap>

      <ApolloConsumer>
        {client => {
          return (
            <Btn>
              <Button
                color='#F18E67' bs='0px 5px 20px rgba(40, 47, 54, 0.05);'
                onClick={async () => {
                  await client.mutate({
                    mutation: CREATE_INSURANCE_ORDER,
                    variables: {
                      fio: props.contactData.fio,
                      email: props.contactData.email,
                      phone: props.contactData.phone,
                      cityID: props.cities[props.city].id,
                      iin: props.contactData.iin,
                      categoryName: props.contactData.categoryName,
                      productName: props.contactData.productName
                    }
                  }).then(res => {
                    client.mutate({
                      mutation: CREATE_INSURANCE,
                      variables: {
                        json: JSON.stringify(myJson)
                      }
                    }).then(res => {
                      Router.push(
                        `/thankyou-page?product=insurance&name=nomad&type=${
                          props.name
                        }`
                      )
                    })
                  })
                }}
              >
                Рассчитать
              </Button>
            </Btn>
          )
        }}
      </ApolloConsumer>
      
      <Btn>
        <Button
          fontColor='#DFE0E1' bs='0px 5px 20px rgba(40, 47, 54, 0.05)' border='1px solid #DFE0E1'
          onClick={() => props.setStep(props.step - 1)}
        >
          Назад
        </Button>
      </Btn>
    </Wrap>
  )
}

export default PreProperty;