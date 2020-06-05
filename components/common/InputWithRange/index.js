import NumberFormat from 'react-number-format';

import InputRange from '../Input/InputRange';

import { Wrap } from './style';

const InputwithRange = props => {

  let correctValue = typeof props.amount === 'string'
                       ? parseInt(props.amount.replace(/\s/g, ''))
                       : props.amount

  // вынеси отдельно                       
  let form
  if (props.amount.length === 3) {
    form = '####'
  } else if (props.amount.length === 2) {
    form = '###'
  } else if (props.amount.length === 1) {
    form = '##'
  } else if (props.amount.length === 4) {
    form = '# ####'
  } else if (props.amount.length === 5) {
    form = '## ####'
  } else if (props.amount.length === 6) {
    form = '### ####'
  } else if (props.amount.length === 7 || props.max.toString().length === 7) {
    form = '# ### ####'
  } else if (props.amount.length === 8) {
    form = '## ### ####'
  } else if (props.amount.length === 9) {
    form = '### ### ####'
  } else if (props.amount.length === 10) {
    form = '# ### ### ###'
  }

  return (
    <Wrap width={props.width} mb={props.mb}>
      <NumberFormat format={form} value={correctValue > props.max ? parseInt(props.max) : correctValue || 0}
        onChange={(e) => props.setAmount(
          typeof e.target.value == 'string' ? e.target.value.replace(/\s/g, '') : e.target.value
        )}
      />
      <InputRange value={correctValue} max={props.max} step='1000'
        onChange={(e) => props.setAmount(e.target.value)}
      />
    </Wrap>
  )
}

export default InputwithRange;