import MainLayout from '../../components/common/MainLayout'
import Head from '../../components/head'
import FoodSearch from '../../components/common/FoodSearch'
import MainSlide from '../../components/food/MainSlide'
import MainTagsBlock from '../../components/common/MainTagsBlock'
import RestaurantsList from '../../components/food/RestaurantsList'
import AddressPopup from '../../components/food/AddressPopup'
import { GET_REST } from './queries'
import { graphql } from 'react-apollo'
import withData from '../../lib/apollo'

class Food extends React.Component {
  state = {
    addressPopup: true
  }
  showAddressPopupHandler = () => {
    //для показа карты
    this.setState({ addressPopup: !this.state.addressPopup })
    console.log('4len')
  }
  render() {
    if (this.props.data.loading || typeof window === 'undefined') return <div />
    // console.log('net', this.props.data)
    return (
      <MainLayout section={3} bg="#D94646">
        <Head title="Еда | Unie.kz" />
        {this.state.addressPopup && (
          <AddressPopup
            showAddressPopupHandler={this.showAddressPopupHandler}
          />
        )}
        {/* <FoodSearch /> */}
        <MainSlide />
        <MainTagsBlock />
        <RestaurantsList restaurants={this.props.data.allRestaurants} />
      </MainLayout>
    )
  }
}

export default withData(graphql(GET_REST)(Food))
