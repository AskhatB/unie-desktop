import CategoryIcon from '../../icons/categoryHeader'
import FinanceCartIcon from '../../icons/financeCart'
import FinanceRequestIcon from '../../icons/financeRequest'
import {
  Wrap,
  Layout,
  CategoryOpenButton,
  SearchBlock,
  ButtonFind,
  RightIcons,
  Icon
} from './style'

class FinanceSubHeader extends React.Component {
  state = {
    categoryListStatus: false,
    search: '',
    searchBlockStatus: false
  }
  render() {
    return (
      <Wrap>
        <Layout>
          <CategoryOpenButton>
            <CategoryIcon />
            Каталог товаров
          </CategoryOpenButton>
          <SearchBlock>
            <input
              type="text"
              onChange={e => this.onSearchChange(e)}
              onFocus={() => this.setState({ searchBlockStatus: true })}
              onBlur={() => setTimeout(() => this.onSearchBlockClose(), 100)}
              onKeyPress={this.onSearchChangeKeyPress}
            />
            <ButtonFind>Найти</ButtonFind>
          </SearchBlock>
          <RightIcons>
            <Icon>
              <FinanceCartIcon />
              <span>Заказы</span>
            </Icon>
            <Icon>
              <FinanceRequestIcon />
              <span>Заявки</span>
            </Icon>
          </RightIcons>
        </Layout>
      </Wrap>
    )
  }
}

export default FinanceSubHeader
