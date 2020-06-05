import gql from 'graphql-tag';

export const CARD = gql`
  query getCard(
    $id: Int!
  ){
    getCreditCard(input: {
      id: $id
    }) {
      id
      name
      partnerID
      cardLogo
      rate
      gesv
      minAmount
      maxAmount
      minAge
      maxAge
      gracePeriod
      cashback
      description
      maintenanceCost
      cardRelease
      smsCost
      typeName
      deliveryCost
      features
      documentlist
      requirements
      payWave
      secure3D
      masterCard
      visa
      amex
      appStore
      playMarket
      partnerName
      partnerLogo
      cardType
      cities
    }
  }
`