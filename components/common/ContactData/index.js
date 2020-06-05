import SelectOne from '../SelectOne';
import InputWrapper from '../InputWrapper';
import Button from '../Button';

import {
  Wrap,
  Text
} from './style';

const ContactData = props => {

  // select принимает только массив с именами(проходится по массиву обьектов и забирает у него имя)
  let cityName = props.cities.map(item => item.name)

  return (
    <Wrap>
      <Text fs='16px' color='#282F36' mb='5px'>Регион получения</Text>
      <SelectOne 
        mb='20px'
        title='Населенный пункт'
        items={cityName}
        active={props.city}
        onChange={props.setCity}
      />
      <Text fs='16px' color='#282F36' mb='5px'>Контактные данные</Text>
      <InputWrapper 
        IIN={props.IIN} setIIN={props.setIIN} email={props.email} setEmail={props.setEmail}
        phoneNumber={props.phoneNumber} setPhoneNumber={props.setPhoneNumber} 
        check={props.check} setCheck={props.setCheck} minAge='18'
        setPhoneValidation={props.setPhoneValidation} phoneValidation={props.phoneValidation}
        emailValidation={props.emailValidation} setEmailValidation={props.setEmailValidation}
        iinValidation={props.iinValidation} setIinValidation={props.setIinValidation}
      />
      <Button 
        color='#F18E67' bs='0px 5px 20px rgba(40, 47, 54, 0.05);' bottom='30px'
        disabled={
          props.IIN < 11 || !props.email || props.phoneNumber.length < 12 || !props.check ||
          !props.phoneValidation || !props.emailValidation || !props.iinValidation
        }
        onClick={() => {
          props.setStep(props.step + 1)
          props.setContactData({
            userID: 1,
            email: props.email,
            phone: props.phoneNumber,
            fio: localStorage.getItem('fio'),
            iin: props.IIN,
            categoryName: props.catName,
            productName: props.prodName,
            registrationCity: props.regCity
          })
        }}
      >
        Далее
      </Button>
    </Wrap>
  )
}

export default ContactData;