import { useState } from 'react';
import { data } from './data';
import toValidCost from '../toValidCost';
import { CREATE_INSURANCE, CREATE_INSURANCE_ORDER } from '../../../pages/insurance/insurance-category/insurance-type/queries';
import { ApolloConsumer } from 'react-apollo';
import Router from 'next/router';

import InputWithRange from '../InputWithRange';
import Button from '../Button';
import RadioBtn from '../RadioBtn';

import {
  Wrap,
  Text,
  Btn,
  RadioWrap
} from './style';

const Accident = props => {
  const [amount, setAmount] = useState(0);
  const [age, setAge] = useState(0);

  let myJson = Object.assign(
    {},
    props.contactData,
    {
      insuranceAmount: `${toValidCost(amount)} тенге`,
      age: data[age],
      insurancePayment: `${toValidCost(
        amount * 0.03
      )} тенге`
    }
  )

  return (
    <Wrap>
      <Text mb='20px'>Возраст</Text>
      <RadioWrap onClick={() => setAge(0)}>
        <RadioBtn checked={age == 0}>от 18 до 21</RadioBtn>
      </RadioWrap>

      <RadioWrap onClick={() => setAge(1)}>
        <RadioBtn>от 21 до 55</RadioBtn>
      </RadioWrap>
      
      <RadioWrap onClick={() => setAge(2)}>
        <RadioBtn>от 55 и выше</RadioBtn>
      </RadioWrap>

      <Text>Сумма возмещения ущерба при наступлении несчастного случая</Text>
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
         bs='0px 5px 20px rgba(40, 47, 54, 0.05)' fontColor='#DFE0E1' border='1px solid #DFE0E1'
         onClick={() => props.setStep(props.step - 1)}
        >
          Назад
        </Button>
      </Btn>
    </Wrap>
  )
}

export default Accident;