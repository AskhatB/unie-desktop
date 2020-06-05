import { useState } from 'react';
import { data } from './data';
import toValidCost from '../toValidCost';
import { CREATE_INSURANCE, CREATE_INSURANCE_ORDER } from '../../../pages/insurance/insurance-category/insurance-type/queries';
import { ApolloConsumer } from 'react-apollo';
import Router from 'next/router';

import RadioBtn from '../RadioBtn';
import InputWithRange from '../InputWithRange';
import Button from '../Button';

import {
  Wrap,
  Text,
  RadioWrap,
  Btn
} from './style';

const ResponsibilityNeib = props => {
  const [responsibilityType, setResponsibilityType] = useState(0);
  const [propertyAmount, setPropertyAmount] = useState(0);

  let myJson = Object.assign(
    {},
    props.contactData,
    {
      insuranceAmount: `${toValidCost(propertyAmount)} тенге`,
      typeOfResponsibility: data[responsibilityType].name,
      insurancePayment: `${toValidCost(propertyAmount * 0.03)} тенге`
    }
  )

  return (
    <Wrap>
      <Text mb='20px'>Тип ответственности</Text>
      <RadioWrap onClick={() => setResponsibilityType(0)}>
        <RadioBtn checked={responsibilityType == 0}>При эксплуатации жилого помещения</RadioBtn>
      </RadioWrap>

      <RadioWrap onClick={() => setResponsibilityType(1)} mb='30px'>
        <RadioBtn>При проведении переустройства жилого помещения</RadioBtn>
      </RadioWrap>

      <Text>Стоимость имущества в тенге</Text>
      <InputWithRange amount={propertyAmount} setAmount={setPropertyAmount} max='1000000' />

      <ApolloConsumer>
        {client => {
          return (
            <Btn>
              <Button
                color='#F18E67' bs='0px 5px 20px rgba(40, 47, 54, 0.05)'
                disabled={propertyAmount == 0}
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
          fontColor='#DFE0E1;' bs='0px 5px 20px rgba(40, 47, 54, 0.05)' border='1px solid #DFE0E1;'
          onClick={() => props.setStep(props.step - 1)}
        >
          Назад
        </Button>
      </Btn>
    </Wrap>
  )
}

export default ResponsibilityNeib;