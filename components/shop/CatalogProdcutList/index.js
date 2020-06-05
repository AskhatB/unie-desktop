import { ProductListWrap, ButtonBlock } from './style'
import ProductCardOne from '../../shop/ProductCardOne'
import LoaderButton from '../../../components/icons/buttonLoader'
import Button from '../../common/Button'

class CatalogProdcutList extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.props.onLoadMore(this.props.fetchMore)
    }
  }

  render() {
    return (
      <div>
        <ProductListWrap>
          {this.props.data.productFilter.map(val => {
            return <ProductCardOne key={val.id} {...val} />
          })}
        </ProductListWrap>
        <ButtonBlock>
          <Button
            color="#4592FF"
            width="max-content"
            height="40px"
            round="20px"
            onClick={() => this.props.onLoadMore(this.props.fetchMore)}>
            Посмотреть еще
          </Button>
        </ButtonBlock>
      </div>
    )
  }

  componentDidUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}

export default CatalogProdcutList
