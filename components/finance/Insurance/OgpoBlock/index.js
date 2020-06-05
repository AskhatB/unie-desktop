import SelectOne from '../../../common/SelectOne'
import { experience, type } from './data'
import { Wrap, Name, Block } from './style'

const OgpoBlock = props => {
  return (
    <Wrap>
      <Block>
        <Name>Возраст/Стаж</Name>
        <SelectOne
          width="260px"
          items={experience}
          active={props.activeOgpoExperince}
          name="activeOgpoExperince"
          onChange={props.selectHandler}
        />
      </Block>
      <Block>
        <Name>Вид транспорта</Name>
        <SelectOne
          width="260px"
          items={type}
          active={props.activeOgpoType}
          name="activeOgpoType"
          onChange={props.selectHandler}
        />
      </Block>
    </Wrap>
  )
}

export default OgpoBlock
