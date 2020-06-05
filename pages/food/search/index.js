import MainLayout from '../../../components/common/MainLayout'
import Head from '../../../components/head'
import FoodSearchLeft from '../../../components/food/FoodSearchLeft'
import FoodSearchRight from '../../../components/food/FoodSearchRight'
import { GET_REST } from './queries'
import { graphql } from 'react-apollo'
import withData from '../../../lib/apollo'
import { Wrap } from './style'

class Search extends React.Component {
  render() {
    if (this.props.data.loading) return <div />
    return (
      <MainLayout section={3} bg="#D94646">
        <Head title="Еда | Unie.kz" />
        <Wrap>
          <FoodSearchLeft />
          <FoodSearchRight restaurants={this.props.data.allRestaurants} />
        </Wrap>
      </MainLayout>
    )
  }
}

export default withData(graphql(GET_REST)(Search))
