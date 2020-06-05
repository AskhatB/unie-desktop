import SelectionSelect from '../SelectionSelect';
import Button from '../Button';
import Input from '../Input/Input1';

import {
  Wrap,
  Wrapper,
  Text,
  Select,
  InputWrapper
} from './style';

const SelectionСareerInfo = props => {
  return (
    <Wrap>
      <Wrapper>
        <Text fs='24px' fw='bold' mb='20px'>Карьера</Text>
        <Text fs='16px' fw='600' mb='10px'>Стаж работы на последнем месте</Text>
        
        {props.data[4].map((item, idx) => {
          return (
            <Select key={idx} onClick={() => props.setWorkExprience(idx)}>
              <SelectionSelect checked={idx === props.workExperience} name='experince'>{item}</SelectionSelect>
            </Select>
          )
        })}
        
        <Text fs='16px' fw='600' mb='10px' mt='40px'>Занимаемая должность</Text>
        
        {props.data[5].map((item, idx) => {
          return (
            <Select key={idx} onClick={() => props.setPosition(idx)}>
              <SelectionSelect checked={idx === props.position} name='position'>{item}</SelectionSelect>
            </Select>
          )
        })}

        <Text fs='16px' fw='600' mb='10px' mt='40px'>Наличие пенсионных отчислений на последнем месте работы</Text>
        
        {props.data[6].map((item, idx) => {
          return (
            <Select key={idx} onClick={() => props.setPension(idx)}>
              <SelectionSelect checked={idx === props.pension} name='pension'>{item}</SelectionSelect>
            </Select>
          )
        })}

        <Text fs='16px' fw='600' mb='10px' mt='40px'>Размер официальной заработной платы</Text>
        
        {props.data[7].map((item, idx) => {
          return (
            <Select key={idx} onClick={() => props.setSalary(idx)}>
              <SelectionSelect checked={idx === props.salary} name='salary'>{item}</SelectionSelect>
            </Select>
          )
        })}

        <Text fs='16px' fw='600' mb='10px' mt='40px'>Размер дополнительного дохода</Text>
        
        {props.data[8].map((item, idx) => {
          return (
            <Select key={idx} onClick={() => props.setIncome(idx)}>
              <SelectionSelect checked={idx === props.income} name='income'>{item}</SelectionSelect>
            </Select>
          )
        })}

        {props.income === 1 && (
          <InputWrapper>
            <Input
              value={props.incomeSumm} onChange={(e) => props.setIncomeSumm(e.target.value)}
              placeholder='Введите сумму'
            />
          </InputWrapper>
        )}

        <Button fontColor='#F18E67' border='1px solid #F18E67' width='180px' right='20px'
          onClick={() => props.setStep(props.step - 1)}
        >
          Назад
        </Button>
        <Button width='180px' color='#F18E67' top='20px'
          onClick={() => props.setStep(props.step + 1)}
          disabled={props.workExperince === 7 || props.position === 9 ||
                    props.pension === 6 || props.salary === 7 || 
                    props.income === 3}
        >
          Далее
        </Button>
      </Wrapper>
    </Wrap>
  )
}

export default SelectionСareerInfo;