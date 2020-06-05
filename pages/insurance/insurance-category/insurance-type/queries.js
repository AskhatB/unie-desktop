import gql from 'graphql-tag';

export const CITIES = gql`
  query cities {
    getCities {
      id
      name
    }
  }
`
export const CREATE_INSURANCE = gql`
  mutation getData($json: String!) {
    CreateNomadInsurance(input: $json)
  }
`

export const CREATE_INSURANCE_ORDER = gql`
  mutation createNomadOrder(
    $fio: String!
    $email: String!
    $phone: String!
    $cityID: Int!
    $iin: String!
    $categoryName: String!
    $productName: String!
  ) {
    createNomadOrder(input:{
      userID: 1,
      partnerID: 22,
      statusID: 1,
      fio: $fio,
      email: $email,
      phone: $phone,
      cityID: $cityID,
      iin: $iin,
      categoryName: $categoryName,
      productName: $productName,
    })
  }
`