import SelectionSelect from '../SelectionSelect';
import Button from '../Button';

import {
  Wrap,
  Wrapper,
  Text,
  Select
} from './style';

const SelectionCreditInfo = props => {
  return (
    <Wrap>
      <Wrapper>
        <Text fs='24px' fw='bold' mb='20px'>Информация о кредите</Text>
        <Text fs='16px' fw='600' mb='10px'>Какая сумма Вам нужна?</Text>
        
        {props.data[0].map((item, idx) => {
          return (
            <Select key={idx} onClick={() => props.setAmount(idx)}>
              <SelectionSelect checked={idx === props.amount} name='amount'>{item}</SelectionSelect>
            </Select>
          )
        })}
        
        <Text fs='16px' fw='600' mb='10px' mt='40px'>На какой срок Вам нужен кредит?</Text>
        
        {props.data[1].map((item, idx) => {
          return (
            <Select key={idx} onClick={() => props.setTerm(idx)}>
              <SelectionSelect checked={idx === props.term} name='term'>{item}</SelectionSelect>
            </Select>
          )
        })}

        <Button color='#F18E67' top='20px' onClick={() => props.setStep(props.step + 1)}
          disabled={props.amount === 5 || props.term === 8}
        >
          Далее
        </Button>
      </Wrapper>
    </Wrap>
  )
}

export default SelectionCreditInfo;