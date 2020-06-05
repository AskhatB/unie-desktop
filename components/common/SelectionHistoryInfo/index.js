import SelectionSelect from '../SelectionSelect';
import Button from '../Button';

import {
  Wrap,
  Wrapper,
  Text,
  Select
} from './style';

const SelectionСareerInfo = props => {
  return (
    <Wrap>
      <Wrapper>
        <Text fs='24px' fw='bold' mb='20px'>Кредитная история</Text>
        <Text fs='16px' fw='600' mb='10px'>Брали ли кредиты ранее?</Text>
        {props.data[9].map((item, idx) => {
          return (
            <Select key={idx} onClick={() => props.setEarlier(idx)}>
              <SelectionSelect checked={idx === props.earlier} name='earlier'>{item}</SelectionSelect>
            </Select>
          )
        })}
        
        {props.earlier === 0 && (
          <React.Fragment>
            <Text fs='16px' fw='600' mb='10px' mt='40px'>Есть ли просрочки?</Text>
            {props.data[10].map((item, idx) => {
              return (
                <Select key={idx} onClick={() => props.setDelay(idx)}>
                  <SelectionSelect checked={idx === props.delay} name='delay'>{item}</SelectionSelect>
                </Select>
              )
            })}

            {props.delay === 0 && (
              <React.Fragment>
                <Text fs='16px' fw='600' mb='10px' mt='40px'>Длительность просрочки</Text>
                {props.data[11].map((item, idx) => {
                  return (
                    <Select key={idx} onClick={() => props.setDelayDuration(idx)}>
                      <SelectionSelect checked={idx === props.delayDuration} name='delayDuration'>{item}</SelectionSelect>
                    </Select>
                  )
                })}
              </React.Fragment>
            )}
          </React.Fragment>
        )}

        <Text fs='16px' fw='600' mb='10px' mt='40px'>Есть ли кредиты сейчас?</Text>
        {props.data[12].map((item, idx) => {
          return (
            <Select key={idx} onClick={() => props.setCreditNow(idx)}>
              <SelectionSelect checked={idx === props.creditNow} name='creditNow'>{item}</SelectionSelect>
            </Select>
          )
        })}

        {props.creditNow === 0 && (
          <React.Fragment>
            <Text fs='16px' fw='600' mb='10px' mt='40px'>Сколько платиите по кредиту?</Text>
            {props.data[13].map((item, idx) => {
              return (
                <Select key={idx} onClick={() => props.setCreditPayment(idx)}>
                  <SelectionSelect checked={idx === props.creditPayment} name='creditPayment'>{item}</SelectionSelect>
                </Select>
              )
            })}

            <Text fs='16px' fw='600' mb='10px' mt='40px'>Наличие текущей просрочки</Text>
            {props.data[14].map((item, idx) => {
              return (
                <Select key={idx} onClick={() => props.setHaveDelayNow(idx)}>
                  <SelectionSelect checked={idx === props.haveDelayNow} name='haveDelayNow'>{item}</SelectionSelect>
                </Select>
              )
            })}
          </React.Fragment>
        )}

        <Button fontColor='#F18E67' border='1px solid #F18E67' width='180px' right='20px'
          onClick={() => props.setStep(props.step - 1)}
        >
          Назад
        </Button>
        <Button width='180px' color='#F18E67' top='20px'
          onClick={() => props.setStep(props.step + 1)}
          disabled={props.earlier === 2 || props.creditNow === 2}
        >
          Далее
        </Button>
      </Wrapper>
    </Wrap>
  )
}

export default SelectionСareerInfo;