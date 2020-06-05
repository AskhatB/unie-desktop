import gql from 'graphql-tag';

export const GET_PARTNER_INFO = gql`
  query getPartner($id: Int!) {
    getPartnerById(input: { partner: $id }) {
      id
      name
      logo
      description
      telNumber
      mail
      fax
      headOfficeAddress
    }
  }
`
export const GET_PRODUCT = gql`
  query getProduct($id: Int!) {
    getLoanByPartnerId(input: { partner: $id }) {
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