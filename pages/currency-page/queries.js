import gql from 'graphql-tag'

export const Currencies = gql`
  query getCurrencies {
    getCurrencies {
      name
      price
      index
      change
    }
  }
`
