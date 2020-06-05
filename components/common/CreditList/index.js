import { Query } from 'react-apollo';
import { LOANS } from './queries';

import LoanCard from '../LoanCard';
import ScoringBanner from '../ScoringBanner';

import {
  Wrap,
  Wrapper
} from './style';

const CreditList = props => {
  return (
    <Wrap>
      <Wrapper>
        {/* <ScoringBanner /> */}
        {/* кастыли с icredit */}
        {props.loanList.length > 0 ? (
          <React.Fragment>
            {props.loanList.map(item => {
              if (props.loader) return <div>loading...</div>
              if (item.partner === 21) return <div /> //solva
              // if (item.partner === 7) return <div /> //sber
              // halyk comission loans
              if (item.id === 96 || item.id === 92 || item.id === 89 || item.id === 86) return <div />
              return (
                <LoanCard key={item.id} item={item} url={props.url} loanAmount={props.loanAmount} />
              )
            })}
            {props.creditType[0].id == 0  && (
              <Query query={LOANS} 
                variables={{
                  sumrange: 0,
                  cityId: 0,
                  loanTerm: 0,
                  loanTypeId: 5,
                }}
              >
                {({loading, error, data}) => {
                  if (loading) return <div />
                  if (error) return <div>{error}</div>
                  return (
                    data.filterLoans.map(value => {
                      if(value.partner === 21) return <div /> //solva
                      return <LoanCard key={value.id} item={value} url={props.url} loanAmount={props.loanAmount} />
                    })
                  )
                }}
              </Query>
            )}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Query query={LOANS} 
              variables={{
                sumrange: 0,
                cityId: 0,
                loanTerm: 0,
                loanTypeId: props.creditType[0].id,
              }}
            >
              {({loading, error, data}) => {
                if (loading) return <div />
                if (error) return <div>{error}</div>
                return (
                  data.filterLoans.map(item => {
                    if(item.partner === 21) return <div /> //solva
                    // if(item.partner === 7) return <div />
                    // halyk comission loans
                    if(item.id === 96 || item.id === 92 || item.id === 89 || item.id === 86) return <div /> 
                    return <LoanCard key={item.id} item={item} url={props.url} loanAmount={props.loanAmount} />
                  })
                )
              }}
            </Query>
            <Query query={LOANS} 
              variables={{
                sumrange: 0,
                cityId: 0,
                loanTerm: 0,
                loanTypeId: 5,
              }}
            >
              {({loading, error, data}) => {
                if (loading) return <div />
                if (error) return <div>{error}</div>
                return (
                  data.filterLoans.map(value => {
                    if(value.partner === 21) return <div /> //solva
                    return <LoanCard key={value.id} item={value} url={props.url} loanAmount={props.loanAmount} />
                  })
                )
              }}
            </Query>
          </React.Fragment>
        )}
      </Wrapper>
    </Wrap>
  )
}

export default CreditList;