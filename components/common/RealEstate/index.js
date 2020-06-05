import { useState } from 'react';
import toValidCost from '../toValidCost';
import { CREATE_INSURANCE, CREATE_INSURANCE_ORDER } from '../../../pages/insurance/insurance-category/insurance-type/queries';
import { ApolloConsumer } from 'react-apollo';
import Router from 'next/router';

import InputWithRange from '../InputWithRange';
import Button from '../Button';

import {
  Wrap,
  Text,
  Btn
} from './style';

const RealEstate = props => {
  const [amount, setAmount] = useState(0);

  let myJson = Object.assign(
    {},
    props.contactData,
    {
      insuranceAmount: `${toValidCost(amount)} тенге`,
      insurancePayment: `${toValidCost(amount * 0.03)} тенге`
    }
  )
  return (
    <Wrap>
      <Text>Стоимость имущества в тенге</Text>
      <InputWithRange amount={amount} setAmount={setAmount} max='1000000' />
      
      <ApolloConsumer>
        {client => {
          return (
            <Btn>
              <Button
                color='#F18E67' bs='0px 5px 20px rgba(40, 47, 54, 0.05)'
                disabled={amount == 0}
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
          fontColor='#DFE0E1' border='1px solid #DFE0E1'
          onClick={() => props.setStep(props.step - 1)}
        >
          Назад
        </Button>
      </Btn>
    </Wrap>
  )
}

export default RealEstate;