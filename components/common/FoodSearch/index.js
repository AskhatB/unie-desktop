import Input1 from '../Input/Input1'
import SelectOne from '../SelectOne'
import Search from '../../icons/search'
import { SearchBlock, SearchInput } from './style'

const FoodSearch = () => {
  return (
    <SearchBlock>
      <SearchInput>
        <Input1 padding="0 0 0 20px" placeholder="Поиск..." />
        <Search />
      </SearchInput>
      <SelectOne items={[]} width="25%" height="53px" border="none" />
    </SearchBlock>
  )
}

export default FoodSearch
