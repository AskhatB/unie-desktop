// import Input1 from '../../../common/Input/Input1'
import InputMask from 'react-input-mask'
import { Wrap, Name } from './style'

const PropertyBlock = props => {
  let form
  if (props.propertyValue.toString().length == 3) {
    form = '9999'
  } else if (props.propertyValue.toString().length == 4) {
    form = '9 9999'
  } else if (props.propertyValue.toString().length == 5) {
    form = '99 9999'
  } else if (props.propertyValue.toString().length == 6) {
    form = '999 9999'
  } else if (props.propertyValue.toString().length == 7) {
    form = '9 999 9999'
  } else {
    form = '99 999 999'
  }
  return (
    <Wrap>
      <Name>Стоимость имущества в тенге</Name>
      <InputMask
        width="260px"
        value={
          typeof props.propertyValue == 'string'
            ? parseInt(props.propertyValue.replace(/\s/g, ''))
            : props.propertyValue
        }
        name="propertyValue"
        onChange={props.changeValueHandler}
        mask={form}
        maskChar={null}
      />
    </Wrap>
  )
}

export default PropertyBlock
