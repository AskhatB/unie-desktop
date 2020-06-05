import gql from 'graphql-tag'

export const AUTH = gql`
  mutation auth($phone: String!, $password: String!) {
    tokenAuth(email: $phone, password: $password) {
      token
    }
  }
`
