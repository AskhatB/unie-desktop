import InputWrapper from '../InputWrapper';
import SelectOne from '../SelectOne';

import {
  Wrap,
  Wrapper,
  Text
} from './style';

const SelectionContactInfo = props => {
  const cityName = props.cities.map(item => item.name)

  return (
    <Wrap>
      <Wrapper>
        <Text fs='24px' fw='bold' color='#282F36' mb='20px'>Контактные данные</Text>
        
        <Text fs='16px' color='#282F36' mb='5px'>Регион получения</Text>
        <SelectOne 
          mb='20px'
          title='Населенный пункт'
          items={cityName}
          active={props.city}
          onChange={props.setCity}
        />

        <Text fs='16px' color='#282F36' mb='5px'>Личная информация</Text>
        <InputWrapper 
          IIN={props.IIN} setIIN={props.setIIN} email={props.email} setEmail={props.setEmail}
          phoneNumber={props.phoneNumber} setPhoneNumber={props.setPhoneNumber} 
          check={props.check} setCheck={props.setCheck}
        />
      </Wrapper>
    </Wrap>
  )
}

export default SelectionContactInfo;