import {
  Wrap,
  Layout,
  CategoryOpenButton,
  SearchBlock,
  ButtonFind,
  SearchResult,
  SearchResultWrap,
  SearchResultItem,
  SearchResultItemImg
} from './style'
import CategoryIcon from '../../icons/categoryHeader'
import CategoriesBlock from '../../shop/CategoriesBlock'
import CloseIcon from '../../icons/closeWhite'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Router from 'next/router'

const SEARCH = gql`
  query search($name: String!) {
    search: fuzzySearch(name: $name) {
      edges {
        node {
          id
          oid
          name
          mediaUrl
        }
      }
    }
  }
`

export const GET_PRODUCT_LIST = gql`
  query getProd(
    $first: Int!
    $last: Int!
    $sort: String!
    $features: [FeaturesFilterInput]
    $text: String!
  ) {
    productFilter(
      first: $first
      last: $last
      features: $features
      sort: $sort
      productName: $text
    ) {
      id
      name
      mediaUrl
      oid
      minimalPrice
      offerSet {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`

class ShopSubHeader extends React.Component {
  state = {
    categoryListStatus: false,
    search: '',
    searchBlockStatus: false
  }

  onCategoryListClick = () => {
    this.setState({ categoryListStatus: !this.state.categoryListStatus })
  }

  onSearchChange = e => {
    const { value } = e.target
    this.setState({ search: value, searchBlockStatus: true })
  }

  onSearchChangeKeyPress = e => {
    const { value } = e.target
    if (this.state.search !== '') {
      if (e.key === 'Enter') {
        this.setState({ search: value, searchBlockStatus: true })
        Router.push(`/shop/search?text=${this.state.search}`)
      }
    }
  }

  onSearchBlockClose = () => {
    this.setState({ searchBlockStatus: !this.state.searchBlockStatus })
  }

  render() {
    return (
      <Wrap>
        <Layout>
          <CategoryOpenButton
            onClick={() => this.onCategoryListClick()}
            active={this.state.categoryListStatus}>
            {this.state.categoryListStatus ? (
              <CloseIcon color="#2C5C9F" />
            ) : (
              <CategoryIcon />
            )}
            Каталог товаров
          </CategoryOpenButton>
          <SearchBlock>
            <input
              type="text"
              onChange={e => this.onSearchChange(e)}
              onFocus={() => this.setState({ searchBlockStatus: true })}
              onBlur={() => setTimeout(() => this.onSearchBlockClose(), 100)}
              onKeyPress={this.onSearchChangeKeyPress}
            />
            <ButtonFind
              href={
                this.state.search !== ''
                  ? `/shop/search?text=${this.state.search}`
                  : null
              }>
              Найти
            </ButtonFind>
          </SearchBlock>
          {this.state.categoryListStatus && (
            <CategoriesBlock onCategoryListClick={this.onCategoryListClick} />
          )}
          <Query query={SEARCH} variables={{ name: this.state.search }}>
            {({ loading, data }) => {
              if (loading) return <div />
              return (
                <SearchResult
                  active={
                    this.state.search !== '' &&
                    data.search.edges.length !== 0 &&
                    this.state.searchBlockStatus
                  }>
                  <SearchResultWrap>
                    {data.search.edges.map(val => {
                      const { images } = JSON.parse(val.node.mediaUrl)
                      return (
                        <SearchResultItem
                          key={val.node.id}
                          href={`/shop/product?id=${val.node.oid}`}>
                          <SearchResultItemImg>
                            <img src={images[0]} alt={val.node.name} />
                          </SearchResultItemImg>
                          {val.node.name}
                        </SearchResultItem>
                      )
                    })}
                  </SearchResultWrap>
                </SearchResult>
              )
            }}
          </Query>
        </Layout>
      </Wrap>
    )
  }
}

export default ShopSubHeader
