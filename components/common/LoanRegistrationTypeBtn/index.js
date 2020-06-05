import { Query, ApolloConsumer } from 'react-apollo';
import { GET_ORDER_STATUS, CREATE_ORDER, HOME_SCORING, ZIP_CODE } from '../../../pages/credit-registration/queries';
import CityTranslit from '../CityTranslit';
import Router from 'next/router';

import Button from '../Button';

const LoanRegistrationTypeBtn = props => {
  if(typeof window == 'undefined') return <div />
  let monthDurations = [1, 3, 6, 9, 12, 24, 36, 48, 60, 120, 240]
  let firstIndex
  let lastIndex

  monthDurations.forEach((el, index) => {
    if (el === props.data.minLoanTerm ||
        el > props.data.minLoanTerm) {
          if (firstIndex === undefined) {
            firstIndex = index
          }
          if (el === props.data.maxLoanTerm ||
              el < props.data.maxLoanTerm){
            lastIndex = index
          }
    }
  })
  monthDurations = monthDurations.slice(firstIndex, lastIndex + 1)
  
  
  let name = localStorage.getItem('fio') ? localStorage.getItem('fio'): '';
  let cityForZip = props.thisCity ? props.infoData.getCities[props.getDocumentCity].name : props.infoData.getCities[props.liveCity].name

  let type

  if (props.data.partner === 41) {
    type = (
      <ApolloConsumer>
        {client => {
          return (
            <Button color='#F18E67'
              disabled={props.IIN.length < 11 || !props.email || props.phoneNumber.length < 9 || !props.check}
              onClick={async () => {
                await client.query({
                  query: GET_ORDER_STATUS,
                  variables: {
                    fio: localStorage.getItem('fio'),
                    phone: props.phoneNumber,
                    email: props.email,
                    iin: props.IIN
                  }
                }).then (res => {
                  if (res.data.creditApplication.statusCode === 200) {
                    client.mutate({
                      mutation: CREATE_ORDER,
                      variables: {
                        userId: 161,
                        productName: props.data.name,
                        partnerId: props.data.partner,
                        fio: localStorage.getItem('fio'),
                        email: props.email,
                        phone: props.phoneNumber,
                        iin: props.IIN,
                        productId: parseInt(props.url.cid),
                        creditItemAmount: props.amount,
                        creditItemTerm: monthDurations[props.loanTerm],
                        city: CityTranslit(props.url.city),
                        cityId: localStorage.getItem('cityId') ? localStorage.getItem('cityId') : 1
                      }
                    }).then(() => {
                      console.log('good')
                      localStorage.setItem('partner', props.data.partner)
                      Router.push(`/thankyou-page?product=credit&id=${props.data.id}`) 
                    }) 
                  } else {
                    console.log('error', res)
                    Router.push(`/already-send`) 
                  }
                })
              }}
            >
              Оформить
            </Button>
          )
        }}
      </ApolloConsumer>
    )
  } else if (props.data.partner === 8) {
    type = (
      <ApolloConsumer>
        {client => {
          return (
            <Query query={ZIP_CODE} 
              variables={{name: cityForZip == 'Нур-Султан' ? 'Астана' : cityForZip}}>
              {({loading, error, data}) => {
                if(loading) return <div />
                if(error) return <div>{error}</div>
                return (
                  <Button color='#F18E67'
                    disabled={
                      props.IIN.length < 11 || !props.email || props.phoneNumber.length < 9 || !props.check ||
                      props.gender === '' || props.idCardNumber.length < 9 || !props.idCardIssBy ||
                      props.idCardIssDate.length != 10 || props.idCardExpDate.length != 10 || props.salary.length < 5 ||
                      !props.phoneValidation || !props.emailValidation || !props.iinValidation ||
                      name.split(' ')[0] === 'null' || !props.idDataValidation
                    }
                    onClick={async () => {
                      props.setLoader(true)
                      await client.mutate({
                        mutation: HOME_SCORING,
                        variables: {
                          loanAmount: parseInt(props.amount),
                          loanLength: monthDurations[props.loanTerm],
                          zipCode: data.hcbScoringAddresses[0].zipCode,
                          iin: props.IIN,
                          mobileNumber: props.phoneNumber,
                          firstName: name.split(' ')[1],
                          lastName: name.split(' ')[0],
                          email: props.email,
                          idCardNumber: props.idCardNumber,
                          idCardIssBy: props.idCardIssBy,
                          idCardIssDate: props.idCardIssDate,
                          idCardExpDate: props.idCardExpDate,
                          monthlyIncome: parseInt(props.salary),
                          economicalStatusCode: props.infoData.hcbScoringEconomicalStatus[props.economicalStatus].code,
                          birthPlace: props.infoData.getCities[props.getDocumentCity].name,
                          gender: props.gender
                        }
                      }).then(res => {
                        console.log('data', res.data.hcbScoring.orderID)
                        if (res.data.hcbScoring.attributes.url) {
                          window.location.replace(res.data.hcbScoring.attributes.url)
                        } else if (res.data.hcbScoring.attributes.error_text == 'Заявка уже существует' || 
                        res.data.hcbScoring.attributes.url == null) {
                          // Router.push('/error-page?type=already')
                          console.log('error already')
                        } else {
                          console.log('tut', res.data)
                          // Router.push('/error-page')
                          console.log('error')
                        }                               
                      })
                    }}
                  >
                    Оформить
                  </Button>
                )
              }}
            </Query>
          )
        }}
      </ApolloConsumer>
    )
  } else {
    type = (
      <ApolloConsumer>
        {client => {
          return (
            <Button color='#F18E67'
              disabled={props.IIN.length < 11 || !props.email || props.phoneNumber.length < 12 || !props.check ||
                !props.phoneValidation || !props.emailValidation || !props.iinValidation
              }
              onClick={async () => {
                await client.mutate({
                  mutation: CREATE_ORDER,
                  variables: {
                    userId: 161,
                    productName: props.data.name,
                    partnerId: props.data.partner,
                    fio: localStorage.getItem('fio'),
                    email: props.email,
                    phone: props.phoneNumber,
                    iin: props.IIN,
                    productId: parseInt(props.url.cid),
                    creditItemAmount: props.amount,
                    creditItemTerm: monthDurations[props.loanTerm],
                    city: CityTranslit(props.url.city),
                    cityId: localStorage.getItem('cityId') ? localStorage.getItem('cityId') : 1
                  }
                }).then(() => {
                  console.log('good')
                  localStorage.setItem('partner', props.data.partner)
                  Router.push(`/thankyou-page?product=credit&id=${props.data.id}`) 
                }) 
              }}
            >
              Оформить
            </Button>
          )
        }}
      </ApolloConsumer>
    )
  }

  return (
    type
  )
}

export default LoanRegistrationTypeBtn;