import Input1 from '../../../common/Input/Input1'
import SelectOne from '../../../common/SelectOne'
import { age } from './data'
import InputMask from 'react-input-mask'
import { Wrap, Block, Name } from './style'

const Accident = props => {
  let form
  if (props.accidentValue.toString().length == 3) {
    form = '9999'
  } else if (props.accidentValue.toString().length == 4) {
    form = '9 9999'
  } else if (props.accidentValue.toString().length == 5) {
    form = '99 9999'
  } else if (props.accidentValue.toString().length == 6) {
    form = '999 9999'
  } else if (props.accidentValue.toString().length == 7) {
    form = '9 999 9999'
  } else {
    form = '99 999 999'
  }
  return (
    <Wrap>
      <Block>
        <Name>Сумма возмещения ущерба при наступлении несчастного случая</Name>
        <InputMask
          width="260px"
          value={
            typeof props.accidentValue == 'string'
              ? parseInt(props.accidentValue.replace(/\s/g, ''))
              : props.accidentValue
          }
          name="accidentValue"
          onChange={props.changeValueHandler}
          mask={form}
          maskChar={null}
        />
      </Block>
      <Block>
        <Name>Возраст</Name>
        <SelectOne
          width="260px"
          items={age}
          active={props.activeAccidentAge}
          name="activeAccidentAge"
          onChange={props.selectHandler}
        />
      </Block>
    </Wrap>
  )
}

export default Accident
