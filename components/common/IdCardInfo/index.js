import InputMask from 'react-input-mask';

import {
  Wrap,
  Text,
  InputWrap,
  DateInfo,
  InputDateWrap
} from './style';

const IdCardInfo = props => {
  const dateValidation = () => {
    if(props.idCardExpDate.length == 10 || props.idCardIssBy.length == 10) {
      let expDate = props.idCardExpDate.substring(7, 10)
      let issDate = props.idCardIssDate.substring(7, 10)
      if(expDate - issDate != 10){
        // console.log('not valid')
        props.setIdDataValidation(false)
      }
    }    
  }
  dateValidation()

  return (
    <Wrap>
      <Text>Удостоверение личности</Text>
      <InputWrap>
        <InputMask 
          type="text"
          value={props.idCardNumber}
          onChange={e => {props.setIdCardNumber(e.target.value)}}
          name="idCardNumber"
          mask="999999999"
          maskChar={null}
          placeholder='Номер УЛ'
        />
      </InputWrap>

      <InputWrap>
        <InputMask 
          type="text"
          value={props.idCardIssBy.toUpperCase()}
          onChange={e => {props.setIdCardIssBy(e.target.value)}}
          name="idCardIssBy"
          maskChar={null}
          placeholder='Орган выдачи'
        />
      </InputWrap>

      <DateInfo>
        <InputDateWrap width='48%' valid={props.idDataValidation}>
          <InputMask 
            type="text"
            value={props.idCardIssDate}
            onChange={e => {
              props.setIdCardIssDate(e.target.value)
              props.setIdDataValidation(true)
            }}
            name="idCardIssBy"
            maskChar={null}
            mask="99/99/9999"
            placeholder='Дата выдачи'
          />
        </InputDateWrap>

        <InputDateWrap width='48%' valid={props.idDataValidation}>
          <InputMask 
            type="text"
            value={props.idCardExpDate}
            onChange={e => {
              props.setIdCardExpDate(e.target.value)
              props.setIdDataValidation(true)
            }}
            name="idCardIssBy"
            maskChar={null}
            mask="99/99/9999"
            placeholder='Срок действия'
          />
        </InputDateWrap>
      </DateInfo>
    </Wrap>
  )
}

export default IdCardInfo;