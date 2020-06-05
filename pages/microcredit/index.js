// сторонние модули
import { useState, useEffect } from 'react';
import withData from '../../lib/apollo';
import { Query } from 'react-apollo';
import { crumbs } from './crumbs';
import { GET_CITIES } from './queries';
import Head from '../../components/head';

// мои компоненты
import MainLayout from '../../components/common/MainLayout';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import MicroLoanFilter from '../../components/common/MicroLoanFilter';
import MicroLoanList from '../../components/common/MicroLoanList';

const MicroCredit = props => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [city, setCity] = useState(0);
  useEffect(() => {
    localStorage.getItem('cityIdx') ? setCity(localStorage.getItem('cityIdx')) : setCity(0)
  }, [])
  
  return (
    <MainLayout creditType={[]} city={props.url.query.city} >
      <Head
        title={`Микрокредиты | 2step.me`}
        description={`Микрокредиты | 2step.me`}
      />
      <BreadCrumbs crumbs={crumbs} />
      <Query query={GET_CITIES}>
        {({ loading, error, data }) => {
          if (loading) return <div />
          if (error) return <div>{error}</div>
          return (
            <React.Fragment>
              <MicroLoanFilter amount={loanAmount} setAmount={setLoanAmount} url={props.url}
                               city={city} setCity={setCity} cities={data.getCities} />

              <MicroLoanList url={props.url} loanAmount={loanAmount} cities={data.getCities} city={city} />                               
            </React.Fragment>
          )
        }}
      </Query>

    </MainLayout>
  );
};

export default withData(MicroCredit);