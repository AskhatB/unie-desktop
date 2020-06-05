import BankInfo from '../BankInfo'
import BankMap from '../BankMap'
import { Wrap } from './style'

const FinanceTopRoll = props => {
  return (
    <Wrap>
      <BankInfo data={props.data} />
      {/* <BankMap /> */}
    </Wrap>
  )
}

export default FinanceTopRoll
