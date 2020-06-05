import { Query } from 'react-apollo';
import { LOANS } from '../../../pages/credit/queries';
import CityTranslit from '../CityTranslit';

import LoanCard from '../LoanCard';
import EmptyLoans from '../EmptyLoans';

import {
  Wrap,
  Wrapper
} from './style';

const MicroLoanList = props => {
  let city = props.cities.filter(city => city.name === CityTranslit(props.url.query.city))
  let checkCity = CityTranslit(props.url.query.city)

  return (
    <Wrap>
      <Wrapper>
        <Query query={LOANS} variables={{
          sumrange: parseInt(props.url.query.sumrange) || 0,
          cityId: city[0].id,
          loanTerm: 0,
          loanTypeId: 5,
        }}>
          {({loading, error, data}) => {
            if (loading) return <div />
            if (error) return <div>{error}</div>
            if (props.url.query.sumrange > 150000 || checkCity !== 'Алматы') return <EmptyLoans />
            return (
              data.filterLoans.map(item => {
                if (item.id === 83) {
                  return <LoanCard key={item.id} item={item} url={props.url} loanAmount={props.loanAmount} />
                }
              })
            )
          }}
        </Query>
      </Wrapper>
    </Wrap>
  )
}

export default MicroLoanList;