import gql from 'graphql-tag'

export const GET_DEBIT_CARD = gql`
  query listDebitCards($id: Int!) {
    getDebitCard(input: { id: $id }) {
      id
      name
      cardLogo
      description
      link
    }
  }
`