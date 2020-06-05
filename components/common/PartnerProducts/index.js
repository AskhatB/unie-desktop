import { GET_PRODUCT } from '../../../pages/partner/queries';
import { Query } from 'react-apollo';

import LoanCard from '../LoanCard';

import {
  Wrap,
  Wrapper,
  Text
} from './style';

const PartnerProducts = props => {
  return (
    <Wrap>
      <Wrapper>
        <Text>Товары от {props.data.name}</Text>
        <Query query={GET_PRODUCT} variables={{id: props.data.id}}>
          {({loading, error, data}) => {
            if (loading) return <div />
            if (error) return <div>{error}</div>
            return data.getLoanByPartnerId.map(item => {
              return (
                <LoanCard key={item.id} item={item} url={props.url} loanAmount={0} />
              )
            })
          }}          
        </Query>
      </Wrapper>
    </Wrap>
  )
}

export default PartnerProducts;