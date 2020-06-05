import gql from 'graphql-tag'

export const GET_CURRENCY = gql`
  query getCur {
    USD: getCurrency(id: 4) {
      id
      name
      price
      qty
      index
      change
    }
    EUR: getCurrency(id: 5) {
      id
      name
      price
      qty
      index
      change
    }
    RUR: getCurrency(id: 14) {
      id
      name
      price
      qty
      index
      change
    }
    CNY: getCurrency(id: 7) {
      id
      name
      price
      qty
      index
      change
    }
    KGS: getCurrency(id: 9) {
      id
      name
      price
      qty
      index
      change
    }
    KRW: getCurrency(id: 23) {
      id
      name
      price
      qty
      index
      change
    }
    UZS: getCurrency(id: 18) {
      id
      name
      price
      qty
      index
      change
    }
  }
`
