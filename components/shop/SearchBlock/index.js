import {
  SearchResult,
  SearchResultItem,
  SearchResultItemLeft,
  SearchResultItemImg,
  SearchResultItemHeading,
  SearchResultItemPrice
} from './style'
import toValidCost from '../../common/toValidCost'

class SearchBlock extends React.Component {
  render() {
    return (
      <SearchResult active={this.props.active}>
        {this.props.data.map(val => {
          const img = JSON.parse(val.node.mediaUrl).images
          return (
            <SearchResultItem
              href={`/shop/product?id=${val.node.oid}`}
              key={val.node.oid}>
              <SearchResultItemLeft>
                <SearchResultItemImg>
                  <img src={img[0]} />
                </SearchResultItemImg>
                <SearchResultItemHeading>
                  {val.node.name}
                </SearchResultItemHeading>
              </SearchResultItemLeft>
              <SearchResultItemPrice>
                {(val.node.minimalPrice &&
                  `${toValidCost(val.node.minimalPrice)} ₸`) ||
                  'Нет в наличии'}
              </SearchResultItemPrice>
            </SearchResultItem>
          )
        })}
      </SearchResult>
    )
  }
}

export default SearchBlock
