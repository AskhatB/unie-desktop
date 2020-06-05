import gql from 'graphql-tag';

export const GET_CARD = gql`
  query homeCard(
    $amount: Int!
    $phone: String!
    $email: String!
    $iin: String!
  ){
    homeCreditBankCreditCard(input: {
      amount: $amount,
      phone: $phone,
      email: $email,
      iin: $iin
    })
  }
`
export const CREATE_CARD_ORDER = gql`
  mutation createOrder(
    $partnerID: Int!
    $statusID: Int!
    $fio: String!
    $email: String!
    $phone: String!
    $city: String!
    $cityID: Int!
    $iin: String!
    $productName: String!
    $productId: Int!
    $creditCardAmount: Int!
  ){
    createCreditCardOrder(input: {
      userID: 1,
      partnerID: $partnerID,
      statusID: $statusID,
      fio: $fio,
      email: $email,
      phone: $phone,
      city: $city,
      cityID: $cityID,
      iin: $iin,
      productName: $productName,
      productId: $productId,
      creditCardAmount: $creditCardAmount
    })
  }
`
export const CARD = gql`
  query getCard(
    $id: Int!
  ){
    getCreditCard(input: {
      id: $id
    }) {
      name
      partnerID
    }
  }
`