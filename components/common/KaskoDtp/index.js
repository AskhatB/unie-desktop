import { useState } from 'react';
import { data } from './data';
import toValidCost from '../toValidCost';
import { CREATE_INSURANCE, CREATE_INSURANCE_ORDER } from '../../../pages/insurance/insurance-category/insurance-type/queries';
import { ApolloConsumer } from 'react-apollo';
import Router from 'next/router';

import SelectOne from '../SelectOne';
import Input from '../Input/Input1';
import Button from '../Button';
import InputWithRange from '../InputWithRange';

import {
  Wrap,
  Text,
  Btn
} from './style';

const KaskoDtp = props => {
  const [tsType, setTsType] = useState(0);
  const [tsNumber, setTsNumber] = useState('');
  const [maxInsurAmount, setMaxInsurAmount] = useState(0);

  let myJson = Object.assign(
    {},
    props.contactData,
    {
      insuranceAmount: `${toValidCost(maxInsurAmount)} тенге`,
      gosNumber: tsNumber.toUpperCase(),
      typeV: data[tsType],
      insurancePayment: `${toValidCost(
        maxInsurAmount * 0.03
      )} тенге`
    }
  )

  return (
    <Wrap>
      <Text>Параметр</Text>
      <SelectOne 
        title='Вид транспортного средства'
        items={data}
        active={tsType}
        onChange={setTsType}
        mb='20px'
      />

      <Input 
        placeholder='Гос. номер ТС'
        value={tsNumber}
        onChange={(e) => setTsNumber(e.target.value)}
        mb='30px'
      />
      <Text>Размер максимального покрытия при страховой выплате</Text>
      <InputWithRange amount={maxInsurAmount} setAmount={setMaxInsurAmount} max='1000000' />
      
      <ApolloConsumer>
        {client => {
          return (
            <Btn>
              <Button
                color='#F18E67' bs='0px 5px 20px rgba(40, 47, 54, 0.05)'
                disabled={tsNumber.length < 5 || tsType == 0 || maxInsurAmount == 0}
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
          bs='0px 5px 20px rgba(40, 47, 54, 0.05);' border='1px solid #DFE0E1'
          fontColor='#DFE0E1' onClick={() => props.setStep(props.step - 1)}
        >
          Назад
        </Button>
      </Btn>
    </Wrap>
  )
}

export default KaskoDtp;