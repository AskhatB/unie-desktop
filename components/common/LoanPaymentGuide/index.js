import {
  Text,
  Block,
  Square
} from './style';

const LoanPaymentGuide = props => {
  return (
    <React.Fragment>
      <Text fs='16px' fw='600' color='#282F36' mb='20px'>Как погасить кредит?</Text>
      {props.repay.map((item, idx) => {
        return (
          <Block key={idx}>
            <Square />
            <Text fs='14px' color='#282F36'>{item}</Text>
          </Block>  
        )
      })}
    </React.Fragment>
  )
}

export default LoanPaymentGuide;