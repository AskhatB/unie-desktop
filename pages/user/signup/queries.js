import gql from 'graphql-tag'

export const SIGN_UP = gql`
  mutation signUp($phone: String!, $password: String!, $email: String!) {
    createUser(phone: $phone, password: $password, email: $email) {
      user {
        id
      }
    }
  }
`

export const AUTH = gql`
  mutation auth($phone: String!, $password: String!) {
    tokenAuth(email: $phone, password: $password) {
      token
    }
  }
`
