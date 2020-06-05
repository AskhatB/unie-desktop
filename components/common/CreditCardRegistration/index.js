import { GET_CARD, CREATE_CARD_ORDER, CARD } from './queries';
import { ApolloConsumer, Query } from 'react-apollo';
import Router from 'next/router';

import InputWithRange from '../InputWithRange';
import InputWrapper from '../InputWrapper';
import Button from '../Button';

import {
  Wrap,
  Inner,
  Text
} from './style';

const CreditCardRegistration = props => {
  let actionClick
  // id=1 - home
  if (props.url.query.id == 1) {
    actionClick = (
      <ApolloConsumer>
        {client => {
          return(
            <Button
              color='#F18E67' width='380px' 
              height='50px' round='5px' 
              bs='2px 1px 10px rgba(109, 139, 191, 0.05);'
              disabled={
                props.IIN.length < 12 || props.phoneNumber.length < 12 || !props.email || !props.check || props.btnOff == true ||
                !props.phoneValidation || !props.emailValidation || !props.iinValidation
              }
              onClick={async () => {
                props.setBtnOff(true)
                await client.query({
                  query: GET_CARD,
                  variables: {
                    amount: parseInt(props.cartAmount),
                    phone: props.phoneNumber,
                    email: props.email,
                    iin: props.IIN
                  }
                }).then(res => {
                  console.log('tut', res.data)
                  if(res.data.homeCreditBankCreditCard === 200){
                    client.mutate({
                      mutation: CREATE_CARD_ORDER,
                      variables: {
                        partnerID: 8,
                        statusID: res.data.homeCreditBankCreditCard,
                        fio: localStorage.getItem('fio'),
                        email: props.email,
                        phone: props.phoneNumber,
                        city: 'Алматы',
                        cityID: 1,
                        iin: props.IIN,
                        productName: "КРЕДИТНАЯ КАРТОЧКА 'ДОС'",
                        productId: parseInt(props.url.query.id),
                        creditCardAmount: parseInt(props.cartAmount)
                      }
                    }).then(() => {
                        Router.push(`/thankyou-page?product=credit-card&id=${props.url.query.id}`)
                      // id продукта
                    })
                  } else {
                    console.log('denied')
                  }
                })
              }}
            >
              Оформить карту
            </Button>
          )
        }}
      </ApolloConsumer>
    )
  } else {
    actionClick = (
      <ApolloConsumer>
        {client => {
          return(
            <Query query={CARD} variables={{id: parseInt(props.url.query.id)}}>
              {({loading, error, data}) => {
                if (loading) return <div />
                if (error) return <div>{error}</div>
                return (
                  <Button
                    color='#F18E67' width='380px' 
                    height='50px' round='5px' 
                    bs='2px 1px 10px rgba(109, 139, 191, 0.05);'
                    disabled={
                      props.IIN.length < 12 || props.phoneNumber.length < 12 || !props.email || !props.check || props.btnOff == true ||
                      !props.phoneValidation || !props.emailValidation || !props.iinValidation
                    }
                    onClick={async () => {
                      props.setBtnOff(true)
                      await client.mutate({
                        mutation: CREATE_CARD_ORDER,
                        variables: {
                          partnerID: data.getCreditCard.partnerID,
                          statusID: 200,
                          fio: localStorage.getItem('fio'),
                          email: props.email,
                          phone: props.phoneNumber,
                          city: 'Алматы',
                          cityID: 1,
                          iin: props.IIN,
                          productName: data.getCreditCard.name,
                          productId: parseInt(props.url.query.id),
                          creditCardAmount: parseInt(props.cartAmount)
                        }
                      }).then(() => {
                          Router.push(`/thankyou-page?product=credit-card&id=${props.url.query.id}`)
                        // id продукта
                      })
                    }}
                  >
                    Оформить карту
                  </Button>
                )
              }}
            </Query>
          )
        }}
      </ApolloConsumer>
    )
  }
  return (
    <Wrap>
      <Inner>
        <Text fs='20px' fw='600' color='#282F36' pb='20px'>Оформить {props.data.name}</Text>
        <Text fs='16px' color='#282F36' pb='10px'>Сумма</Text>
        <InputWithRange amount={props.cartAmount} setAmount={props.setCartAmount} max='1000000' step='5000' />
        <Text fs='16px' color='#282F36' pb='10px'>Получатель</Text>
        <InputWrapper 
          IIN={props.IIN} setIIN={props.setIIN} email={props.email} setEmail={props.setEmail}
          phoneNumber={props.phoneNumber} setPhoneNumber={props.setPhoneNumber}
          check={props.check} setCheck={props.setCheck} actionClick={actionClick}
          setPhoneValidation={props.setPhoneValidation} phoneValidation={props.phoneValidation}
          emailValidation={props.emailValidation} setEmailValidation={props.setEmailValidation}
          iinValidation={props.iinValidation} setIinValidation={props.setIinValidation} 
        />
        {actionClick}
      </Inner>
    </Wrap>
  )
};

export default CreditCardRegistration;