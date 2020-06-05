import gql from 'graphql-tag';

export const GET_CITIES = gql`
  query cityList {
    cities: getCities {
      name
      id
    }
  }
`
export const GET_MORTGAGE = gql`
  query mortgageList {
    listMortgage {
      id
      name
      gesv
      rate
      partner
      maxAmount
      partnerLogo
      partnerName
    }
  }
`