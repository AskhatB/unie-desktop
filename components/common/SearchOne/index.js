import { Wrap, Input, BurgerIconWrap, SearchBlock } from './styled'
import BurgerIcon from '../../icons/burger'
import SearchIcon from '../../icons/search'

const SearchOne = props => {
  return (
    <Wrap>
      <Input
        type="text"
        onChange={props.onChange}
        value={props.value}
        onFocus={props.onChange}
        onBlur={props.onSearchBlur}
        placeholder="Поиск"
      />
      {/* <BurgerIconWrap>
        <BurgerIcon />
      </BurgerIconWrap> */}
      <SearchBlock>
        <SearchIcon />
      </SearchBlock>
    </Wrap>
  )
}

export default SearchOne
