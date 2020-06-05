import gql from 'graphql-tag';

export const GET_CITIES = gql`
  query cityList {
    cities: getCities {
      name
      id
    }
  }
`