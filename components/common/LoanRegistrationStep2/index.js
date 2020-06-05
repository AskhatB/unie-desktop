import { useState } from 'react';
import { Query } from 'react-apollo';
import { ECONOMICAL_STATUS } from '../../../pages/credit-registration/queries';

import HomeScoringPage from '../HomeScoringPage';
import InputWrapper from '../InputWrapper';
import LoanRegistrationTypeBtn from '../LoanRegistrationTypeBtn';
import Button from '../Button';

import {
  Wrap,
  Wrapper,
  Text
} from './style';

const LoanRegistrationStep2 = props => {
  const [IIN, setIIN] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [getDocumentCity, setGetDocumentCity] = useState(0);
  const [liveCity, setLiveCity] = useState(0);
  const [thisCity, setThisCity] = useState(true);
  const [gender, setGender] = useState('');
  const [idCardNumber, setIdCardNumber] = useState('');
  const [idCardIssBy, setIdCardIssBy] = useState('');
  const [idCardIssDate, setIdCardIssDate] = useState('');
  const [idCardExpDate, setIdCardExpDate] = useState('');
  const [economicalStatus, setEconomicalStatus] = useState(0);
  const [salary, setSalary] = useState('');
  const [check, setCheck] = useState(false);
  const [phoneValidation, setPhoneValidation] = useState(true);
  const [emailValidation, setEmailValidation] = useState(true);
  const [iinValidation, setIinValidation] = useState(true);
  const [idDataValidation, setIdDataValidation] = useState(true);

  let registrationForm
  if(props.data.partner === 8) {
    registrationForm = (
      <Query query={ECONOMICAL_STATUS}>
        {({loading, error, data}) => {
          if(loading) return <div />
          if(error) return <div>{error}</div>
          return (
            <HomeScoringPage liveCity={liveCity} setLiveCity={setLiveCity} partner={props.data.partner}
              getDocumentCity={getDocumentCity} setGetDocumentCity={setGetDocumentCity} data={data}
              IIN={IIN} setIIN={setIIN} email={email} setEmail={setEmail} setThisCity={setThisCity}
              phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} gender={gender} setGender={setGender}
              idCardNumber={idCardNumber} setIdCardNumber={setIdCardNumber} idCardIssBy={idCardIssBy}
              setIdCardIssBy={setIdCardIssBy} idCardIssDate={idCardIssDate} setIdCardIssDate={setIdCardIssDate}
              idCardExpDate={idCardExpDate} setIdCardExpDate={setIdCardExpDate} minAge={props.data.minAge}
              economicalStatus={economicalStatus} setEconomicalStatus={setEconomicalStatus}
              salary={salary} setSalary={setSalary} setCheck={setCheck} thisCity={thisCity} 
              setPhoneValidation={setPhoneValidation} phoneValidation={phoneValidation}
              emailValidation={emailValidation} setEmailValidation={setEmailValidation}
              iinValidation={iinValidation} setIinValidation={setIinValidation} check={check}
              idDataValidation={idDataValidation} setIdDataValidation={setIdDataValidation}
            />
          )
        }}
      </Query>
    )
  } else {
    registrationForm = (
      <InputWrapper 
        IIN={IIN} setIIN={setIIN} email={email} setEmail={setEmail} check={check} setCheck={setCheck}
        phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} 
        setPhoneValidation={setPhoneValidation} phoneValidation={phoneValidation}
        emailValidation={emailValidation} setEmailValidation={setEmailValidation}
        iinValidation={iinValidation} setIinValidation={setIinValidation} 
      />
    )
  }

  return (
    <Wrap>
      <Query query={ECONOMICAL_STATUS}>
        {({loading, error, data}) => {
          if(loading) return <div />
          if(error) return <div>{error}</div>
          return (
            <Wrapper>
              <Text>Контактные данные</Text>
              { registrationForm }
              {/* кнопка для оформления (смотрит по partnerid) */}
              <LoanRegistrationTypeBtn
                IIN={IIN} phoneNumber={phoneNumber} email={email} data={props.data} infoData={data}
                amount={props.amount} url={props.url} loanTerm={props.loanTerm} check={check}
                idCardNumber={idCardNumber} idCardIssBy={idCardIssBy} idCardIssDate={idCardIssDate}
                idCardExpDate={idCardExpDate} salary={salary} gender={gender} getDocumentCity={getDocumentCity}
                economicalStatus={economicalStatus} thisCity={thisCity} liveCity={liveCity} gender={gender}
                idCardNumber={idCardNumber} idCardIssBy={idCardIssBy} idCardIssDate={idCardIssDate}
                idCardExpDate={idCardExpDate} salary={salary} emailValidation={emailValidation}
                phoneValidation={phoneValidation} iinValidation={iinValidation} idDataValidation={idDataValidation}
                setLoader={props.setLoader}
              />
              <Button width='378px' border='1px solid #F18E67' fontColor='#F18E67' top='10px'
                onClick={() => props.setRegistrationStep(props.registrationStep - 1)}
              >
                Назад
              </Button>
            </Wrapper>
          )
        }}
      </Query>
    </Wrap>
  )
}

export default LoanRegistrationStep2;