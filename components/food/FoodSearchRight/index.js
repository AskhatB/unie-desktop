import RestaurantCard from '../RestaurantCard'
import { Wrap } from './style'

class FoodSearchRight extends React.Component {
  render() {
    return (
      <Wrap>
        {this.props.restaurants.edges.map(item => {
          return <RestaurantCard key={item.node.oid} item={item.node} />
        })}
        {this.props.restaurants.edges.map(item => {
          return <RestaurantCard key={item.node.oid} item={item.node} />
        })}
        {this.props.restaurants.edges.map(item => {
          return <RestaurantCard key={item.node.oid} item={item.node} />
        })}
        {this.props.restaurants.edges.map(item => {
          return <RestaurantCard key={item.node.oid} item={item.node} />
        })}
      </Wrap>
    )
  }
}

export default FoodSearchRight
