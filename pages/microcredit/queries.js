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
      earlyRepayment
      earningsConfirmation
      workExperience
      lastWorkExperience
      currency
      guarantor
      comission
      minAmount
      maxAmount
      cities
      pawnPercentage
      picturePath
      partner
      pawn
      rate
      minApprovalDays
      maxApprovalDays
      description
      partnerLogo
      gesv
      shortDescripton
      documentlist
      partnerLogo
      partnerName
    }
  }
`
export const GET_CITIES = gql`
  query cityList {
    getCities {
      name
      id
    }
  }
`
