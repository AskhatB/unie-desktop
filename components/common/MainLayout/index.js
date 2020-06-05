import { GET_CITIES } from './queries';
import { Query } from 'react-apollo';

import Header from '../Header';
import Footer from '../Footer';
import PreFooter from '../PreFooter';

import { Wrap, Layout } from './style';

const MainLayout = ({ children, noFooter, noPreFooter, footer, creditType, city }) => {
  return (
    <Wrap>
      <Query query={GET_CITIES}>
        {({loading, error, data}) => {
          if (loading) return <div />
          if (error) return <div>{error}</div>
          return (
            <Header cities={data.cities} />
          )
        }}
      </Query>

      <Layout>{children}</Layout>
      {!noPreFooter && <PreFooter footer={footer} creditType={creditType} city={city} />}
      {!noFooter && <Footer bg="#77BEFF;" fontColor="#77BEFF;" />}
    </Wrap>
  );
};

export default MainLayout;