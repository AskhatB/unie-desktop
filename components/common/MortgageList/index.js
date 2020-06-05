import { Query } from 'react-apollo';
import { GET_MORTGAGE } from '../../../pages/ipoteka/queries';

import MortgageCard from '../MortgageCard';

import {
  Wrap,
  Wrapper
} from './style';

const MortgageList = props => {
  return (
    <Wrap>
      <Wrapper>
        <Query query={GET_MORTGAGE}>
          {({loading, error, data}) => {
            if (loading) return <div />
            if (error) return <div>{error}</div>
            return (
              data.listMortgage.map(item => {
                return (
                  <MortgageCard key={item.id} data={item} amount={props.amount}
                    perMonth={props.perMonth} overpay={props.overpay} city={props.city}
                  />
                )
              })
            )
          }}
        </Query>
      </Wrapper>
    </Wrap>
  )
}

export default MortgageList;