import RestaurantCard from '../RestaurantCard'
import { Wrap, Title, List, Wrapper } from './style'

const RestaurantsList = props => {
  return (
    <Wrap>
      <Title>Все рестораны</Title>
      <List>
        {props.restaurants.edges.map(item => {
          return <RestaurantCard key={item.node.oid} item={item.node} />
        })}
        {props.restaurants.edges.map(item => {
          return <RestaurantCard key={item.node.oid} item={item.node} />
        })}
        {props.restaurants.edges.map(item => {
          return <RestaurantCard key={item.node.oid} item={item.node} />
        })}
        {props.restaurants.edges.map(item => {
          return <RestaurantCard key={item.node.oid} item={item.node} />
        })}
      </List>
    </Wrap>
  )
}

export default RestaurantsList
