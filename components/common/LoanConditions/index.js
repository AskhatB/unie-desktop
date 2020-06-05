import { useState } from 'react';
import { Query } from 'react-apollo';
import { LOAN } from '../../../pages/credit-page/queries';

import RateCondition from '../RateCondition';
import ConditionBlock from '../ConditionBlock';
import RequirementsBlock from '../RequirementsBlock';
import DocumentsBlock from '../DocumentsBlock';
import TabScrollBlock from '../TabScrollBlock';

import {
  Wrap,
  Wrapper
} from './style';

const LoanConditions = props => {
  const [tab, setTab] = useState(0);
  let id
  if (props.cid == 94){
    id = 96
  } else if (props.cid == 91){
    id = 92
  } else if (props.cid == 90){
    id = 89
  } else if (props.cid == 87){
    id = 86
  } else {
    id = props.cid
  }
  
  return (
    <Wrap>
      <Wrapper>
        {props.data.partner === 43 && (
          <TabScrollBlock items={['С комиссией', 'Без комиссии']} tabStatus={tab} 
                          changeActiveTabHandler={setTab} />
        )}
        <Query query={ LOAN } variables={{ id: id }}>
          {({loading, error, data}) => {
            if (loading) return <div />
            if (error) return <div>{error}</div>
            return (
              <React.Fragment>
                <RateCondition data={tab === 1 ? data.getLoan : props.data} />
                <ConditionBlock data={tab === 1 ? data.getLoan : props.data} />
                <RequirementsBlock data={tab === 1 ? data.getLoan : props.data} />
                <DocumentsBlock data={tab === 1 ? data.getLoan : props.data} />
              </React.Fragment>
            )
          }}
        </Query>
      </Wrapper>
    </Wrap>
  )
}

export default LoanConditions;