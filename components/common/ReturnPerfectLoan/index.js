import LoanCard from '../LoanCard';

import {
  Wrap,
  Wrapper
} from './style';

const ReturnPerfectLoan = props => {

  return (
    <Wrap>
      <Wrapper>
        <LoanCard item={props.data} url={props.url} loanAmount={props.amount} />
      </Wrapper>
    </Wrap>
  )
}

export default ReturnPerfectLoan;