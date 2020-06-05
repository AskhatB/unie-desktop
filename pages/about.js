import React, { Component } from 'react'
import Main from '../lib/layout'
import withData from '../lib/apollo'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Router, { withRouter } from 'next/router'

class About extends Component {
  render() {
    const { data, match } = this.props
    const { error, loading, categories, partners } = data
    if (error) return <div style={{ color: 'red' }}>Ошибка</div>
    if (loading) return <div>loading ...</div>

    console.log(this.props)
    return (
      <div>
        {this.props.data.categories.map(categ => (
          <p>{categ.name}</p>
        ))}
      </div>
    )
  }
}

const SHOP_MAIN_QUERY = gql`
  query ShopMainQuery {
    categories: getMainCategories {
      id
      name
      mediaUrl
    }
    partners: allShopPartners {
      id
      name
      logoUrl
    }
  }
`

export default withData(graphql(SHOP_MAIN_QUERY)(withRouter(About)))
