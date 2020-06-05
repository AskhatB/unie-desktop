import FoodCart from '../FoodCard'
import SwitcherTabs from '../../common/SwitcherTabs'
import { Wrap, ScrollBlock, List, Nothing } from './style'

class RestaurantMainProducts extends React.Component {
  state = {
    tabStatus: 0
  }
  onTabChange = id => {
    //для смены тэга
    this.setState({ tabStatus: id })
  }
  render() {
    let tabs = this.props.items.edges[0].node.categorySet.edges.map(item => {
      return item.node.category.name //все тэги
    })
    let category = this.props.items.edges[0].node.categorySet.edges
    return (
      <Wrap>
        <ScrollBlock>
          {' '}
          {/*скролл для тэгов*/}
          <SwitcherTabs
            active={this.state.tabStatus}
            tabs={tabs}
            onTabChange={this.onTabChange}
          />
        </ScrollBlock>
        <List>
          {category
            .filter(
              (
                v //если tabstatus равен id тэгу у еды
              ) =>
                v.node.category.oid ===
                category[this.state.tabStatus].node.category.oid
            )
            .map((item, idx) => {
              if (
                item.node.category.categorySet.edges[0].node.foodSet.edges
                  .length === 0
              )
                //если нету еды в этом теге
                return <Nothing key={idx}>Ничего не найдено</Nothing>
              return (
                //если есть по тегу то мапим и выводимы
                item.node.category.categorySet.edges[0].node.foodSet.edges.map(
                  item => {
                    // console.log('4len', item)
                    return (
                      <FoodCart
                        key={item.node.id}
                        item={item.node}
                        addToCart={this.props.addToCart}
                      />
                    )
                  }
                )
              )
            })}
        </List>
      </Wrap>
    )
  }
}

export default RestaurantMainProducts
