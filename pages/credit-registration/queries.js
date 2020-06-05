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
export const CREATE_ORDER = gql`
  mutation loanOrder(
    $partnerId: Int!
    $fio: String!
    $email: String!
    $phone: String!
    $iin: String!
    $productId: Int!
    $creditItemAmount: Int!
    $creditItemTerm: Int!
    $city: String!
    $cityId: Int!
    $productName: String!
  ) {
    createLoanOrder(
      input: {
        userId: 161
        partnerId: $partnerId
        statusId: 0
        fio: $fio
        email: $email
        phone: $phone
        city: $city
        cityId: $cityId
        iin: $iin
        productId: $productId
        productName: $productName
        creditItemAmount: $creditItemAmount
        creditItemTerm: $creditItemTerm
        comments: "no comments"
      }
    )
  }
`
export const GET_ORDER_STATUS = gql`
  query creditApplicatio(
    $fio: String!
    $phone: String!
    $email: String!
    $iin: String!
  ) {
    creditApplication(input: {fio: $fio, phone: $phone, email: $email, iin: $iin}) {
      description
      statusCode
    }
  }
`
export const HOME_SCORING = gql`
  mutation scoring(
    $loanAmount: Int!
    $loanLength: Int!
    $zipCode: String!
    $iin: String!
    $mobileNumber: String!
    $firstName: String!
    $lastName: String!
    $email: String,
    $idCardNumber: String!
    $idCardIssBy: String!
    $idCardIssDate: String!
    $idCardExpDate: String!
    $monthlyIncome: Int!
    $economicalStatusCode: String!
    $birthPlace: String!
    $gender: String!
  ){
    hcbScoring(input: {
      loanAmount: $loanAmount,
      loanLength: $loanLength,
      zipCode: $zipCode,
      iin: $iin,
      mobileNumber: $mobileNumber,
      firstName: $firstName,
      lastName: $lastName,
      email: $email,
      idCardNumber: $idCardNumber,
      idCardIssBy: $idCardIssBy,
      idCardIssDate: $idCardIssDate,
      idCardExpDate: $idCardExpDate,
      monthlyIncome: $monthlyIncome,
      economicalStatusCode: $economicalStatusCode,
      birthPlace: $birthPlace,
      gender: $gender
    }) {
      orderID
      attributes {
        url
        request_uuid
        error_text
        error_dscr
      }
    }
  }
`
export const ECONOMICAL_STATUS = gql`
  query economicStatus {
    hcbScoringEconomicalStatus {
      id
      code
      title
    }
    getCities {
      name
      id
    }
  }
`
export const ZIP_CODE = gql`
  query city($name: String!) {
    hcbScoringAddresses(input: {
      townName: $name
    }) {
      id
      regionCode
      regionName
      districtCode
      districtName
      zipCode
      townName
    }
  }
`