import DebitCardCategory from '../../icons/debitCardCategory';
import CreditCardCategory from '../../icons/creditCardCategory';
import IpotekaCategory from '../../icons/ipotekaCategory';
import MicroLoanCategory from '../../icons/microloancategory';
import InsuranceCategory from '../../icons/insuranceCategory';
import CalculatorCategory from '../../icons/calculatorCategory';
import CreditCategory from '../../icons/creditCategory';

export const data = [
  {src: <CreditCategory />, name:'Онлайн кредиты', url: '/credit?type=kredit&city=almaty'},
  {src: <DebitCardCategory />, name:'Дебетовые карты', url: '/debit-card'},
  {src: <CreditCardCategory />, name:'Кредитные карты', url: '/credit-cards'},
  // {src: <IpotekaCategory />, name:'Ипотека', url: '/ipoteka?type=ipoteka&city=almaty'},
  {src: <MicroLoanCategory />, name:'Микрокредиты', url: '/microcredit?city=almaty'},
  {src: <InsuranceCategory />, name:'Страхование', url: '/insurance/insurance-category?name=nomad'},
  {src: <CalculatorCategory />, name:'Онлайн калькулятор', url: '/credit-calculator'}
];