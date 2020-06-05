import { Query } from 'react-apollo';
import withData from '../../lib/apollo';
import { GET_PARTNER_INFO } from './queries';

import MainLayout from '../../components/common/MainLayout';
import Head from '../../components/head';
import PartnerInfo from '../../components/common/PartnerInfo';
import PartnerProducts from '../../components/common/PartnerProducts';

const Partner = props => {
  return (
    <MainLayout noPreFooter>
      <Query query={GET_PARTNER_INFO} variables={{id: parseInt(props.url.query.id)}}>
        {({loading, error, data}) => {
          if (loading) return <div />
          if (error) return <div>{error}</div>
          return (
            <React.Fragment>
              <Head 
                title={`${data.getPartnerById.name} | 2step.me`} 
                description={data.getPartnerById.description}
              />
              <PartnerInfo data={data.getPartnerById} />
              {data.getPartnerById.id === 7 ? <div /> : (
                <PartnerProducts data={data.getPartnerById} url={props.url} />
              )}
            </React.Fragment>
          )
        }}
      </Query>
    </MainLayout>
  )
}

export default withData(Partner);