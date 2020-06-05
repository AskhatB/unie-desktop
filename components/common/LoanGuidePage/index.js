import CalculatorBanner from '../CalculatorBanner';
import GetLoanGuide from '../GetLoanGuide';
import LoanPaymentGuide from '../LoanPaymentGuide';

import {
  Wrap,
  Wrapper
} from './style';

const LoanGuidePage = props => {
  return (
    <Wrap>
      <Wrapper>
        <CalculatorBanner id={props.data.id} max={props.data.maxAmount} />
        <GetLoanGuide />
        <LoanPaymentGuide repay={props.data.repayLoan} />
      </Wrapper>
    </Wrap>
  )
}

export default LoanGuidePage;