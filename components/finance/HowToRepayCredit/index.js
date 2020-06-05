import Tick from '../../icons/tick'
import { Wrap, Block, Wrapper } from './style'

const HowToRepayCredit = props => {
  return (
    <Wrap>
      {props.repay.map((item, idx) => {
        return (
          <Block key={idx}>
            <div>
              <Tick />
            </div>
            {item}
          </Block>
        )
      })}
    </Wrap>
  )
}

export default HowToRepayCredit
