import gql from 'graphql-tag'

export const GET_REST = gql`
  query allRests {
    allRestaurants {
      edges {
        node {
          id
          name
          logoUrl
          oid
          previewUrl
          rating
          delivery {
            price
            minSum
            time
          }
          tags {
            edges {
              node {
                name
              }
            }
          }
          openinghoursSet {
            edges {
              node {
                id
                toHour
                fromHour
                weekdayTo
                weekdayFrom
              }
            }
          }
        }
      }
    }
  }
`
