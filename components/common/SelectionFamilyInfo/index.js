import SelectionSelect from '../SelectionSelect';
import Button from '../Button';

import {
  Wrap,
  Wrapper,
  Text,
  Select
} from './style';

const SelectionFamilyInfo = props => {
  return (
    <Wrap>
      <Wrapper>
        <Text fs='24px' fw='bold' mb='20px'>Информация о семье</Text>
        <Text fs='16px' fw='600' mb='10px'>Семейное положение</Text>
        
        {props.data[2].map((item, idx) => {
          return (
            <Select key={idx} onClick={() => props.setMarital(idx)}>
              <SelectionSelect checked={idx === props.marital} name='marital'>{item}</SelectionSelect>
            </Select>
          )
        })}
        
        <Text fs='16px' fw='600' mb='10px' mt='40px'>Наличие детей</Text>
        
        {props.data[3].map((item, idx) => {
          return (
            <Select key={idx} onClick={() => props.setChildren(idx)}>
              <SelectionSelect checked={idx === props.children} name='children'>{item}</SelectionSelect>
            </Select>
          )
        })}

        <Button fontColor='#F18E67' border='1px solid #F18E67' width='180px' right='20px'
          onClick={() => props.setStep(props.step - 1)}
        >
          Назад
        </Button>
        <Button width='180px' color='#F18E67' top='20px'
          onClick={() => props.setStep(props.step + 1)}
          disabled={props.marital === 5 || props.children === 5}
        >
          Далее
        </Button>
      </Wrapper>
    </Wrap>
  )
}

export default SelectionFamilyInfo;