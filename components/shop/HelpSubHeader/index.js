import {
  Wrap,
  Layout,
  CategoryOpenButton,
  SearchBlock,
  ButtonFind
} from './style'
import CategoryIcon from '../../icons/categoryHeader'
import ListBlock from '../../shop/ListBlock'
import CloseIcon from '../../icons/closeWhite'

class HelpSubHeader extends React.Component {
  state = {
    listStatus: false,
    search: '',
    searchBlockStatus: false
  }

  onListClick = () => {
    this.setState({ listStatus: !this.state.listStatus })
  }

  onSearchChange = e => {
    const { value } = e.target
    this.setState({ search: value, searchBlockStatus: true })
  }

  onSearchBlockClose = () => {
    this.setState({ searchBlockStatus: !this.state.searchBlockStatus })
  }

  render() {
    return (
      <Wrap>
        <Layout>
          <CategoryOpenButton
            onClick={() => this.onListClick()}
            active={this.state.listStatus}>
            {this.state.listStatus ? (
              <CloseIcon color="#282F36" />
            ) : (
              <CategoryIcon />
            )}
            Навигация
          </CategoryOpenButton>
          <SearchBlock>
            <input
              type="text"
              placeholder="Чем могу помочь?"
              onChange={e => this.onSearchChange(e)}
              onFocus={() => this.setState({ searchBlockStatus: true })}
              onBlur={() => setTimeout(() => this.onSearchBlockClose(), 100)}
            />
            <ButtonFind href={`/shop/help/search?text=${this.state.search}`}>
              Найти
            </ButtonFind>
          </SearchBlock>
          {this.state.listStatus && (
            <ListBlock onListClick={this.onListClick} />
          )}
        </Layout>
      </Wrap>
    )
  }
}

export default HelpSubHeader
