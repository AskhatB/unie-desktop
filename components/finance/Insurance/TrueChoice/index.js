import SelectOne from '../../../common/SelectOne'
import { Wrap, Name } from './style'

const TrueChoice = props => {
  return (
    <Wrap>
      <Name>Выберите город</Name>
      <SelectOne
        items={props.cities}
        active={props.activeCity}
        name="activeCity"
        width="260px"
        onChange={props.selectHandler}
      />
    </Wrap>
  )
}

export default TrueChoice
