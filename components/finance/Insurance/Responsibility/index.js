import SelectOne from '../../../common/SelectOne'
import Input1 from '../../../common/Input/Input1'
import InputMask from 'react-input-mask'
import { respType } from './data'
import { Wrap, Block, Name } from './style'

const Responsibility = props => {
  let form
  if (props.responsibilityValue.toString().length == 3) {
    form = '9999'
  } else if (props.responsibilityValue.toString().length == 4) {
    form = '9 9999'
  } else if (props.responsibilityValue.toString().length == 5) {
    form = '99 9999'
  } else if (props.responsibilityValue.toString().length == 6) {
    form = '999 9999'
  } else if (props.responsibilityValue.toString().length == 7) {
    form = '9 999 9999'
  } else {
    form = '99 999 999'
  }
  return (
    <Wrap>
      <Block>
        <Name>Тип ответственности</Name>
        <SelectOne
          width="260px"
          items={respType}
          active={props.activeResponsibilityType}
          name="activeResponsibilityType"
          onChange={props.selectHandler}
        />
      </Block>
      <Block>
        <Name>Cумма страховой выплаты</Name>
        <InputMask
          width="260px"
          value={
            typeof props.responsibilityValue == 'string'
              ? parseInt(props.responsibilityValue.replace(/\s/g, ''))
              : props.responsibilityValue
          }
          name="responsibilityValue"
          onChange={props.changeValueHandler}
          mask={form}
          maskChar={null}
        />
      </Block>
    </Wrap>
  )
}

export default Responsibility
