import {
  Wrap,
  Left,
  CatalogWrap,
  CatalogItems,
  CatalogItem,
  Right,
  HiddenWrap,
  HiddenItemHeader,
  HiddenItems,
  HiddenItemsWrap,
  HiddenItem,
  HiddenHeader,
  IconWrap
} from './style'
import ArrowIcon from '../../icons/arrowWide'

const list = [
  { name: 'О Unie', id: 1 },
  { name: 'Партнерам', id: 2 },
  { name: 'Финансы', id: 3 },
  { name: 'Магазин', id: 4 }
]

class ListBlock extends React.Component {
  state = {
    activeCat: 1
  }

  hiddenBlockHandler = id => {
    this.setState({ activeCat: id })
  }

  render() {
    return (
      <Wrap onMouseLeave={() => this.props.onListClick()}>
        <Left>
          <CatalogWrap>
            <CatalogItems>
              {list.map(val => (
                <CatalogItem
                  key={val.id}
                  onMouseEnter={() => this.hiddenBlockHandler(val.id)}
                  onMouseLeave={() => this.hiddenBlockHandler(val.id)}>
                  <span style={{ marginLeft: '10px' }}>{val.name}</span>
                </CatalogItem>
              ))}
            </CatalogItems>
          </CatalogWrap>
        </Left>
        <Right>
          <HiddenWrap>
            <HiddenHeader>
              {
                list.filter(val => val.id == this.state.activeCat.toString())[0]
                  .name
              }
            </HiddenHeader>
            {/* <HiddenItems>
              {data.getRootCategory.subcategories &&
                data.getRootCategory.subcategories.map(val => {
                  return (
                    <HiddenItemsWrap>
                      <HiddenItemHeader
                        href={`/shop/catalog?id=${val.id}`}>
                        {val.name}
                      </HiddenItemHeader>
                      {val.subcategories.map(v => {
                        return (
                          <HiddenItem href={`/shop/catalog?id=${v.id}`}>
                            {v.name}
                          </HiddenItem>
                        )
                      })}
                    </HiddenItemsWrap>
                  )
                })}
            </HiddenItems> */}
          </HiddenWrap>
        </Right>
      </Wrap>
    )
  }
}
export default ListBlock
