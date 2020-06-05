import gql from 'graphql-tag'

export const GET_PERFECT = gql`
  query perfect(
    $amount: Int!
    $loanTerm: Int!
    $loanTypeId: Int
    $gesv: Int
    $city: Int
  ) {
    filterPerfectLoans(
      input: {
        amount: $amount
        loanTerm: $loanTerm
        loanTypeId: $loanTypeId
        gesv: $gesv
        city: $city
      }
    ) {
      name
      id
      gesv
      partner
      rate
      partnerName
      partnerLogo
      pawnPercentage
      maxAmount
      minAmount
      shortDescripton
      minAge
      maxAge
      minLoanTerm
      maxLoanTerm
    }
  }
`
export const GET_CITIES = gql`
  query cityList {
    cities: getCities {
      name
      id
    }
  }
`