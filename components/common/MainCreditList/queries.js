import gql from 'graphql-tag'

export const LOANS = gql`
  query listOfCat(
    $sumrange: Int!
    $cityId: Int!
    $loanTerm: Int!
    $loanTypeId: Int!
  ) {
    filterLoans(
      input: {
        cityId: $cityId
        amount: $sumrange
        loanTerm: $loanTerm
        loanTypeId: $loanTypeId
      }
    ) {
      id
      name
      minAge
      maxAge
      minLoanTerm
      maxLoanTerm
      currency
      comission
      minAmount
      maxAmount
      partner
      pawn
      rate
      description
      partnerLogo
      partnerName
      shortDescripton
      pawnPercentage
      gesv
    }
  }
`