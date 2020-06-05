import gql from 'graphql-tag'

export const GET_PARTNERS = gql`
  query getInfo {
    partners: listPartners {
      id
      name
      logo
      type
    }
  }
`
