import {
  Wrap,
  Layout,
  Item,
  Name,
  SubMenu,
  Menu,
  SubMenuItem,
  SubMenuWrap,
  LogoLink,
  CategoriesBlock,
  CategoriesItem,
  CategoriesHeading,
  CategoriesSubHeading,
  CategoryWrap
} from './style'
import Logo from '../../icons/logo'
import Link from 'next/link'

class PartnerHeader extends React.Component {
  state = {
    activeCatBlock: false,
    catIndx: 0
  }

  render() {
    return (
      <Wrap>
        <Menu>
          <Layout>
            <LogoLink href="/shop">
              <Logo />
            </LogoLink>
            <Item href={`/shop/partner/about?id=${this.props.id}`}>
              О магазине
            </Item>
            <Name>{this.props.name}</Name>
          </Layout>
        </Menu>
        <SubMenuWrap>
          <SubMenu>
            {this.props.categories.map((val, indx) => (
              <SubMenuItem
                onMouseEnter={() =>
                  this.setState({ activeCatBlock: true, catIndx: indx })
                }
                onMouseLeave={() =>
                  this.setState({ activeCatBlock: false, catIndx: indx })
                }>
                {val.name}
              </SubMenuItem>
            ))}
          </SubMenu>
          {this.state.activeCatBlock && (
            <CategoriesBlock
              onMouseEnter={() => this.setState({ activeCatBlock: true })}
              onMouseLeave={() => this.setState({ activeCatBlock: false })}>
              <CategoryWrap>
                {this.props.categories[this.state.catIndx].subcategories.map(
                  val => {
                    return (
                      <CategoriesItem>
                        <CategoriesHeading
                          href={`/shop/catalog?id=${val.id}&Магазин=${
                            this.props.partnerId
                          }`}>
                          {val.name}
                        </CategoriesHeading>
                        {val.subcategories.map(v => {
                          return (
                            <CategoriesSubHeading
                              href={`/shop/catalog?id=${v.id}&Магазин=${
                                this.props.partnerId
                              }`}>
                              {v.name}
                            </CategoriesSubHeading>
                          )
                        })}
                      </CategoriesItem>
                    )
                  }
                )}
              </CategoryWrap>
            </CategoriesBlock>
          )}
        </SubMenuWrap>
      </Wrap>
    )
  }
}

export default PartnerHeader
