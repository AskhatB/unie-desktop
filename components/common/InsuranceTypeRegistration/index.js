import Ogpo from '../Ogpo';
import KaskoDtp from '../KaskoDtp';
import RealEstate from '../RealEstate';
import ResponsibilityNeib from '../ResponsibilityNeib';
import PreProperty from '../PreProperty';
import Accident from '../Accident';
import MedInsurance from '../MedInsurance';

import { Wrap } from './style';

const InsuranceTypeRegistration = props => {
  console.log(props.name)
  let type
  if(props.name === 'obizatelnaya-strahovka-ogpo') {
    type = (
      <Ogpo 
        step={props.step} setStep={props.setStep} contactData={props.contactData} name={props.name}
        city={props.city} cities={props.cities}
      />
    )
  } else if (props.name === 'kasko-dtp') {
    type = (
      <KaskoDtp 
        step={props.step} setStep={props.setStep} contactData={props.contactData} name={props.name}
        city={props.city} cities={props.cities}
      />
    )
  } else if (props.name === 'strahovanie-nedvizhemogo-imushestva') {
    type = (
      <RealEstate 
        step={props.step} setStep={props.setStep} contactData={props.contactData} name={props.name}
        city={props.city} cities={props.cities}
      />
    )
  } else if (props.name === 'otvetstvennost-pered-sosedyami') {
    type = (
      <ResponsibilityNeib 
        step={props.step} setStep={props.setStep} contactData={props.contactData} name={props.name}
        city={props.city} cities={props.cities}
      />
    )
  } else if (props.name === 'strahovanie-preimushestvo') {
    type = (
      <PreProperty 
        step={props.step} setStep={props.setStep} contactData={props.contactData} name={props.name}
        city={props.city} cities={props.cities}
      />
    )
  } else if (props.name === 'strahovanie-ot-neschastnogo-sluchaya') {
    type = (
      <Accident 
        step={props.step} setStep={props.setStep} contactData={props.contactData} name={props.name}
        city={props.city} cities={props.cities}
      />
    )
  } else if (props.name === 'medicinskoe-strahovanie-turistov') {
    type = (
      <MedInsurance 
        step={props.step} setStep={props.setStep} contactData={props.contactData} name={props.name}
        city={props.city} cities={props.cities}
      />
    )
  }

  return <Wrap>{type}</Wrap> 
}

export default InsuranceTypeRegistration;