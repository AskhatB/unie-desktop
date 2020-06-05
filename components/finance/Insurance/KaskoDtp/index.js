import SelectOne from '../../../common/SelectOne'
import Input1 from '../../../common/Input/Input1'
import InputRange from '../../../common/Input/InputRange'
import InputMask from 'react-input-mask'
import { data } from './data'
import { Wrap, Block, Name, InputWrapper } from './style'

const KaskoDtp = props => {
  let form
  if (props.kaskoInputValue.toString().length == 3) {
    form = '9999'
  } else if (props.kaskoInputValue.toString().length == 4) {
    form = '9 9999'
  } else if (props.kaskoInputValue.toString().length == 5) {
    form = '99 9999'
  } else if (props.kaskoInputValue.toString().length == 6) {
    form = '999 9999'
  } else if (props.kaskoInputValue.toString().length == 7) {
    form = '9 999 9999'
  } else {
    form = '99 999 999'
  }
  return (
    <Wrap>
      <Block>
        <Name>Вид транспорта</Name>
        <SelectOne
          width="260px"
          items={data}
          active={props.activeKaskoType}
          name="activeKaskoType"
          onChange={props.selectHandler}
        />
      </Block>
      <Block>
        <Name>Размер максимального покрытия при страховой выплате</Name>
        <InputWrapper>
          <InputMask
            width="260px"
            value={
              typeof props.kaskoInputValue == 'string'
                ? parseInt(props.kaskoInputValue.replace(/\s/g, ''))
                : props.kaskoInputValue
            }
            name="kaskoInputValue"
            onChange={props.changeValueHandler}
            mask={form}
            maskChar={null}
          />
          <InputRange
            value={props.kaskoInputValue || 0}
            max="6000000"
            name="kaskoInputValue"
            onChange={props.changeValueHandler}
          />
        </InputWrapper>
      </Block>
    </Wrap>
  )
}

export default KaskoDtp
