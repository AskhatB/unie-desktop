import gql from 'graphql-tag'

export const GET_NAME_BY_IIN = gql`
  query getIIN($iin: String!) {
    getIIN(iin: $iin)
  }
`
