import { useState } from 'react';

import SelectOne from '../SelectOne';
import InputWrapper from '../InputWrapper';
import RadioBtn from '../RadioBtn';
import IdCardInfo from '../IdCardInfo';
import WorkInfo from '../WorkInfo';
import Checkbox from '../Checkbox';
import UserAccepted from '../UserAccepted';

import {
  Wrap,
  Text,
  ChangeToOtherCity,
  RadioWrapper,
  Radio,
  Box
} from './style';

const HomeScoringPage = props => {
  const [userAcc, setUserAcc] = useState(false);
  const cities = props.data.getCities.map(item => {
    return item.name
  })

  return (
    <Wrap>
      <UserAccepted userAccepted={userAcc} click={() => setUserAcc(!userAcc)} />
      <Text>Место рождения</Text>
      <SelectOne 
        mb='20px'
        title='Город'
        items={cities}
        active={props.getDocumentCity}
        onChange={props.setGetDocumentCity}
      />
      {props.thisCity && <ChangeToOtherCity onClick={() => props.setThisCity(false)}>В другом городе живу</ChangeToOtherCity>}

      {!props.thisCity && (
        <React.Fragment>
          <Text>Город проживания</Text>
          <SelectOne 
            mb='20px'
            title='Город'
            items={cities}
            active={props.liveCity}
            onChange={props.setLiveCity}
          />
        </React.Fragment>
      )}

      <Text>Личная информация</Text>
      <InputWrapper 
        IIN={props.IIN} setIIN={props.setIIN} email={props.email} setEmail={props.setEmail}
        phoneNumber={props.phoneNumber} setPhoneNumber={props.setPhoneNumber} partner={props.partner}
        setPhoneValidation={props.setPhoneValidation} phoneValidation={props.phoneValidation}
        emailValidation={props.emailValidation} setEmailValidation={props.setEmailValidation}
        minAge={props.minAge} iinValidation={props.iinValidation} setIinValidation={props.setIinValidation}
      />

      <Text>Вы...</Text>
      <RadioWrapper>
        <Radio onClick={() => props.setGender('M')}>
          <RadioBtn>Мужчина</RadioBtn>
        </Radio>

        <Radio onClick={() => props.setGender('F')}>
          <RadioBtn>Женщина</RadioBtn>
        </Radio>
      </RadioWrapper>

      <IdCardInfo idCardNumber={props.idCardNumber} setIdCardNumber={props.setIdCardNumber} 
        idCardIssBy={props.idCardIssBy} setIdCardIssBy={props.setIdCardIssBy}
        idCardIssDate={props.idCardIssDate} setIdCardIssDate={props.setIdCardIssDate}
        idCardExpDate={props.idCardExpDate} setIdCardExpDate={props.setIdCardExpDate}
        setIdDataValidation={props.setIdDataValidation} idDataValidation={props.idDataValidation}
      />

      <WorkInfo data={props.data} economicalStatus={props.economicalStatus} setSalary={props.setSalary}
        setEconomicalStatus={props.setEconomicalStatus} salary={props.salary}
      />

      <Box>
        <Checkbox color='#77BEFF' mb='30px' onChange={() => props.setCheck(!props.check)} />
        <span onClick={() => setUserAcc(true)}>Я принимаю условия передачи информации</span>
      </Box>
    </Wrap>
  )
}

export default HomeScoringPage;