import gql from 'graphql-tag'

export const GET_PARTNER_INFO = gql`
  query getPartner($id: Int!) {
    restaurant(oid: $id) {
      edges {
        node {
          id
          name
          previewUrl
          rating
          delivery {
            price
            minSum
          }
          tags {
            edges {
              node {
                id
                name
              }
            }
          }
          categorySet {
            edges {
              node {
                id
                oid
                category {
                  id
                  name
                  oid
                  categorySet {
                    edges {
                      node {
                        id
                        foodSet {
                          edges {
                            node {
                              id
                              name
                              oid
                              imgUrl
                              price
                              description
                              optionSet {
                                edges {
                                  node {
                                    id
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
