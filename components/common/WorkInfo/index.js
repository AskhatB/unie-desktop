import SelectOne from '../SelectOne';
import NumberFormat from 'react-number-format';

import {
  Wrap,
  Text,
  InputWrap
} from './style';

const WorkInfo = props => {
  let status = props.data.hcbScoringEconomicalStatus.map(item => {
    return item.title
  })

  // вынеси отдельно
  let form
  if (props.salary.length === 3) {
    form = '####'
  } else if (props.salary.length === 2) {
    form = '###'
  } else if (props.salary.length === 1) {
    form = '##'
  } else if (props.salary.length === 4) {
    form = '# ####'
  } else if (props.salary.length === 5) {
    form = '## ####'
  } else if (props.salary.length === 6) {
    form = '### ####'
  } else if (props.salary.length === 7) {
    form = '# ### ####'
  } else if (props.salary.length === 8) {
    form = '## ### ####'
  } else if (props.salary.length === 9) {
    form = '### ### ####'
  } else if (props.salary.length === 10) {
    form = '# ### ### ###'
  }

  return (
    <Wrap>
      <Text>Работа</Text>
      <SelectOne 
        mb='10px'
        title='Должность'
        items={status}
        active={props.economicalStatus}
        onChange={props.setEconomicalStatus}
      />
      <InputWrap>
        <NumberFormat 
          type="text"
          value={props.salary}
          onChange={e => {props.setSalary(
            typeof e.target.value == 'string' ? e.target.value.replace(/\s/g, '') : e.target.value
          )}}
          format={form}
          placeholder='Размер заработной платы'
        />
      </InputWrap>
    </Wrap>
  )
}

export default WorkInfo;