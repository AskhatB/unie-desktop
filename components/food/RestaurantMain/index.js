import RestaurantMainPreview from '../RestaurantMainPreview'
import RestaurantMainProducts from '../RestaurantMainProducts'

const RestaurantMain = props => {
  return (
    <React.Fragment>
      <RestaurantMainPreview items={props.items} />{' '}
      {/*верхний компонент с изображением */}
      <RestaurantMainProducts
        items={props.items}
        addToCart={props.addToCart}
      />{' '}
      {/*компонент со всеми рестами */}
    </React.Fragment>
  )
}

export default RestaurantMain
