import MainLayout from '../../../components/common/MainLayout'
import Head from '../../../components/head'
import CartBlock from '../../../components/food/CartBlock'
import RestaurantMain from '../../../components/food/RestaurantMain'
import Button from '../../../components/common/Button'
import { GET_PARTNER_INFO } from './queries'
import { graphql } from 'react-apollo'
import withData from '../../../lib/apollo'
import { Wrap, LeftSide, RightSide } from './style'

class Partner extends React.Component {
  state = {
    cart: []
  }
  addToCart = (id, price, name, type, options) => {
    //добавление в корзину
    console.log(id, price, name, type)
    const newCart = Array.from(this.state.cart)
    const weed = this.state.cart.filter(v => v.id === id)
    let count = (weed.length !== 0 && weed[0].amount) || 1
    let newPrice = (weed.length !== 0 && weed[0].price) || price
    if (type === 0) {
      count -= 1
      newPrice -= price
    }
    if (type === 1) {
      count += 1
      newPrice += price
    }
    if (type === 2) {
      count = count
    }
    newCart.map((v, i) => {
      if (v.id === id) {
        newCart.splice(i, 1)
        newCart.push({
          id: id,
          name: name,
          amount: count,
          price: newPrice,
          actualPrice: price,
          options: options
        })
      }
    })
    if (weed.length === 0) {
      newCart.push({
        id: id,
        name: name,
        amount: count,
        price: newPrice,
        actualPrice: price
      })
    }
    this.setState({
      cart: newCart
    })
    localStorage.setItem('cart', JSON.stringify(newCart))
  }
  render() {
    if (this.props.data.loading || typeof window === 'undefined') return <div />
    console.log('a', this.state.cart)
    return (
      <MainLayout section={3} bg="#D94646">
        <Head title="Еда | Unie.kz" />
        <Wrap>
          <LeftSide>
            <RestaurantMain
              addToCart={this.addToCart}
              items={this.props.data.restaurant}
            />
          </LeftSide>
          <RightSide>
            <CartBlock />
            <Button width="100%" color="#D94646" height="40px" round="20px">
              {' '}
              Оформить заказ
            </Button>
          </RightSide>
        </Wrap>
      </MainLayout>
    )
  }
}

export default withData(
  graphql(GET_PARTNER_INFO, {
    options: props => ({
      variables: {
        id: props.url.query.id
      }
    })
  })(Partner)
)
