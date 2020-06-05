import gql from 'graphql-tag'

export const GET_MORTGAGE = gql`
query mortgageById($id: Int!) {
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
    loanTypes
    cities
    picturePath
    partner
    pawn
    rate
    minApprovalDays
    maxApprovalDays
    description
    partnerLogo
    partnerName
    shortDescripton
    pawnPercentage
    gesv
    documentlist
    rateInfo
    termsMessage
    requirements
    repayLoan
    creditFeature
  }
}
`