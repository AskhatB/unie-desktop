import SelectOne from '../../../common/SelectOne'
import { advantageType } from './data'
import { Wrap, Name } from './style'

const Advantege = props => {
  let type = []
  type = advantageType.map(item => {
    return item.name
  })
  return (
    <Wrap>
      <Name>Страховой пакет</Name>
      <SelectOne
        width="260px"
        items={type}
        active={props.activeAdvantageType}
        name="activeAdvantageType"
        onChange={props.selectHandler}
      />
    </Wrap>
  )
}

export default Advantege
