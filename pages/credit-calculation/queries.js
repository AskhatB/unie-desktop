import gql from 'graphql-tag';

export const LOAN = gql`
  query listOfCat($id: Int!) {
    getLoan(input: { id: $id }) {
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
      picturePath
      partner
      pawn
      rate
      rateInfo
      minApprovalDays
      maxApprovalDays
      description
      gesv
      documentlist
      repayLoan
      termsMessage
      requirements
      shortDescripton
      pawnPercentage
      partnerLogo
      partnerName
    }
  }
`