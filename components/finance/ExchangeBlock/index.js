import ArrowIcon from '../../icons/arrowCurrency'
import DoubleArrow from '../../icons/doubleArrow'
import { GET_CURRENCY } from './queries'
import { Query } from 'react-apollo'
import { Wrap, Block, Cur, Name} from './style'

const ExchangeBlock = props => {
  return (
    <Wrap>
      <Query query={GET_CURRENCY}>
        {({ loading, error, data }) => {
          if (loading) return <div />
          if (error) return <div>{error}</div>
          return (
            <Block>
              <Cur>
                <Name>USD</Name>
                <span>{data.USD[0].price}</span>
                {data.USD[0].index === 'UP' && <ArrowIcon up green />}
                {data.USD[0].index === 'DOWN' && <ArrowIcon down red />}
                {data.USD[0].index === '' && <DoubleArrow />}
              </Cur>
              <Cur>
                <Name>EUR</Name>
                <span>{data.EUR[0].price}</span>
                {data.EUR[0].index === 'UP' && <ArrowIcon up green />}
                {data.EUR[0].index === 'DOWN' && <ArrowIcon down red />}
                {data.EUR[0].index === '' && <DoubleArrow />}
              </Cur>
              <Cur>
                <Name>RUB</Name>
                <span>{data.RUR[0].price}</span>
                {data.RUR[0].index === 'UP' && <ArrowIcon up green />}
                {data.RUR[0].index === 'DOWN' && <ArrowIcon down red />}
                {data.RUR[0].index === '' && <DoubleArrow />}
              </Cur>
            </Block>
          )
        }}
      </Query>
    </Wrap>
  )
} 

export default ExchangeBlock
