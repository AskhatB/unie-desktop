import { GET_NAME_BY_IIN } from './queries';
import { Query } from 'react-apollo';
import InputMask from 'react-input-mask';

import Input from '../Input/Input1';
import Checkbox from '../Checkbox';

import {
  Wrap,
  InputWrap,
  Text,
  InputWithNumber,
  Numb,
  MailInputWrap
} from './style';

const InputWrapper = props => {
  const validationPhone = () => {
    if(props.phoneNumber.length < 13) {
      // console.log('not valid length')
    } else {
      // console.log('valid length')
      const kzOperators = ['700', '701', '702', '705', '707', '708', '747', '750', '751', '760', '761', '762', '763', '764', '771', '775', '776', '777', '778']
      const userOperator = props.phoneNumber.slice(0, 3)
      const index = kzOperators.indexOf(userOperator)
      if(index == -1) {
        // console.log('operator is not valid')
        props.setPhoneValidation(false)
      } else {
        // console.log('operator is valid')
        props.setPhoneValidation(true)
        const remainedNumber = props.phoneNumber.slice(3).replace(/[^0-9\.]+/g,'')
        if(remainedNumber.split('').every(el => el === remainedNumber[0])) {
          // console.log('every is not valid')
          props.setPhoneValidation(false)
        } else {
          // console.log('every is valid')
          props.setPhoneValidation(true)
        }
      }
    }
  }

  const validationEmail = () => {
    if(props.email.length > 4){
      if(!props.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        props.setEmailValidation(false, () => {
          // console.log('not valid');
        });
      } else {
        props.setEmailValidation(true, () => {
          // console.log('valid');
        });
      }
    }
  }

  const checkAge = (dateOfBirth) => {
    let today = new Date();
    let birthDate = new Date(dateOfBirth);

    let age = today.getFullYear() - birthDate.getFullYear()
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age
  }

  const validationIIN = () => {
    if(props.IIN.length < 12) {
      console.log('not valid iin length')
    } else {
      if(props.IIN[6] === '3' || props.IIN[6] === '4') {
        let dateOfBirth = '19' +  props.IIN.substring(0,2) + '-' + props.IIN.substring(2,4) + '-' + props.IIN.substring(4,6)
        let age = checkAge(dateOfBirth)
        // console.log('age', age)
        if(age < props.minAge) {
          // console.log('wigol')
          props.setIinValidation(false)
        }
      } else if(props.IIN[6] === '5' || props.IIN[6] === '6'){
        let dateOfBirth = '20' +  props.IIN.substring(0,2) + '-' + props.IIN.substring(2,4) + '-' + props.IIN.substring(4,6)
        let age = checkAge(dateOfBirth)
        // console.log('age', age)
        if(age < props.minAge) {
          props.setIinValidation(false)
        }
      }
    }
  }

  validationPhone();
  // validationEmail();
  validationIIN();

  return(
    <Wrap>
      <InputWrap valid={props.iinValidation}>
        <InputMask 
          placeholder='ИИН'
          value={props.IIN}
          onChange={(e) => {
            props.setIIN(e.target.value)
            props.setIinValidation(true)
          }}
          mask='999999999999' maskChar={null}
        />
        <span>Кредит выдается лицам достигшим {props.minAge} лет</span>
        {props.IIN.length === 12 && (
          <Query query={GET_NAME_BY_IIN} variables={{iin: props.IIN}}>
            {({loading, error, data}) => {
              if(loading) return <div />
              if(error) return <div>{error}</div>
              localStorage.setItem('fio', data.getIIN.iin)
              return <Text>{data.getIIN.iin ? data.getIIN.iin : data.getIIN.description}</Text>
            }}
          </Query>
        )}
      </InputWrap>

      <InputWithNumber valid={props.phoneValidation}>
        <Numb>+7</Numb>
        <InputMask 
          value={props.phoneNumber} 
          onChange={(e) => {
            props.setPhoneNumber(e.target.value)
            props.setPhoneValidation(true)
          }}
          mask='999-999-99-99' maskChar={null}
        />
        <span>Введите корректный номер</span>
      </InputWithNumber>

      <MailInputWrap valid={props.emailValidation}>
        <Input 
          width='380px'
          mb='30px'
          placeholder='E-mail'
          fs='16px'
          value={props.email}
          onChange={(e) => {
            props.setEmail(e.target.value) 
            // props.setEmailValidation(true)
          }}
        />
        <span>Правильно заполните поле</span>
      </MailInputWrap>

      {props.partner != 8 && (
        <Checkbox color='#77BEFF' mb='30px' onChange={() => props.setCheck(!props.check)} >
          Я принимаю условия передачи информации
        </Checkbox>
      )}
    </Wrap>
  )
}

export default InputWrapper;