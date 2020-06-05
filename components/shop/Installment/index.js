import {
  Instalment,
  Term,
  H5,
  Monthes,
  Month,
  Bank,
  PriceBlock,
  InstalmentPrice,
  GrayText
} from './style'
import Button from '../../common/Button'
import toValidCost from '../../../components/common/toValidCost'
import SelectOne from '../../../components/common/SelectOne'

const Installment = props => {
  let bankList = []
  props.installmentData.map(val => {
    if(bankList.length === 0) {   
      if(!bankList.includes(val.id)){ 
        bankList.push(val.inst.name)
      }
    }
  })

  return (
    <Instalment>
      <Term>
        <H5>Рассрочка</H5>
        <Monthes>
          {props.installmentData.map(val => {
            return(
              <Month
                id={val.id}
                onClick={props.monthStatusHandler}
                active={props.monthStatus === val.id}>
                {val.month} мес
              </Month>
            )
          })}
        </Monthes>
      </Term>
      <Bank>
        <H5>Выберите банк</H5>
        <SelectOne
          active={props.activeBank}
          items={bankList}
          onChange={props.onBankChange}
        />
      </Bank>
      <PriceBlock>
        <Button
          color="#FFE249"
          height="40px"
          fontColor="#535239"
          round="20px"
          onClick={() =>
            props.toOrderCreate(
              props.offerId,
              props.productAmount,
              parseInt(props.monthStatus, 10)
            )
          }>
          Купить в рассрочку
        </Button>
        <InstalmentPrice>
          <GrayText>Ежемесячный платеж</GrayText>
          {toValidCost(Math.round(props.installmentPrice))} ₸/мес
        </InstalmentPrice>
      </PriceBlock>
    </Instalment>
  )
}

export default Installment
