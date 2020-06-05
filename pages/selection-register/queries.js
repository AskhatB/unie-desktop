import gql from 'graphql-tag';

export const CITIES = gql`
  query cities {
    getCities {
      id
      name
    }
  }
`
export const SCORING = gql`
  query scoring(
    $fio: String!
    $iin: String!
    $city: String!
    $phone: String!
    $martialStatus: Int!
    $kids: Int!
    $workExperience: Int!
    $position: Int!
    $pension: Int!
    $wage: Int!
    $additionalIncome: Int!
    $loansBefore: Int!
    $loanOverdue: Int!
    $loanOverduePeriod: Int!
    $loanNow: Int!
    $loanNowPayment: Int!
    $loanNowOverdue: Int!
  ){
    scoringHandler(input:{ 
      fio: $fio
      iin: $iin
      city: $city
      phone: $phone
      amount: 1000000,
      age: 12,
      term: 12,
      maritalStatus: $martialStatus,
      kids: $kids
      workExperience: $workExperience
      position: $position
      pension: $pension
      wage: $wage
      additionalIncome: $additionalIncome
      loansBefore: $loansBefore
      loanOverdue: $loanOverdue
      loanOverduePeriod: $loanOverduePeriod
      loanNow: $loanNow
      loanNowPayment: $loanNowPayment
      loanNowOverdue: $loanNowOverdue
  
    }) {
      totalScore
      status
    }
  }
`
export const SEND_FOR_ALL_BANKS = gql`
  mutation createOrder(
    $fio: String!
    $email: String!
    $phone: String!
    $city: String!
    $cityId: Int!
    $iin: String!
    $creditItemAmount: Int!
    $creditItemTerm: Int!
  ) {
    createLoanOrders(input: {
      userId: 1,
      partnerId: [25, 41,  8, 43, 42],
      statusId: 0,
      fio: $fio,
      email: $email,
      phone: $phone,
      city: $city,
      cityId: $cityId,
      iin: $iin,
      productName: [
        "Беззалоговый кредит от AsiaCredit Bank",
        "Акция «Телевизор в подарок к кредиту»! Кредит без залога Альфа-наличные от Альфа Банк",
        "Кредит наличными онлайн от Home Credit Bank",
        "Кредит без залога с комиссией от Halyk Bank",
        "Микрокредит 'Срочный' от I-Credit"
      ],
      productId: [4, 49, 65, 94, 83],
      creditItemAmount: $creditItemAmount,
      creditItemTerm: $creditItemTerm
    }) {
      id
      status
    }
  }
`