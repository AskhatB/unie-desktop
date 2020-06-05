import minSum from '../LoanCard/minSum';
import maxSum from '../LoanCard/maxSum';

import {
  Wrapper,
  RateInfo,
  Text
} from './style';

const ConditionBlock = props => {
  return (
    <React.Fragment>
      <Text mb='15px'>Условия</Text>
      <Wrapper>
        <RateInfo width='300px'>
          <Text color='#93979B' fs='14px' fw='normal'>Сумма кредита</Text>
          <Text>от {minSum(props.data.minAmount)} до {maxSum(props.data.maxAmount)}</Text>
        </RateInfo>
        <RateInfo>
          <Text color='#93979B' fs='14px' fw='normal'>Срок</Text>
          <Text>от {props.data.minLoanTerm} до {props.data.maxLoanTerm} мес</Text>
        </RateInfo>
      </Wrapper>
    </React.Fragment>
  )
}

export default ConditionBlock;