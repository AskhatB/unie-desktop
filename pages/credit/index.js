// сторонние модули
import { useState, useEffect } from 'react';
import withData from '../../lib/apollo';
import { Query } from 'react-apollo';
import cityTranslit from '../../components/common/CityTranslit';
import landingFilters from './landingFilters';
import { duration } from './duration';
import { crumbs } from './crumbs';
import { GET_CITIES } from './queries';
import Head from '../../components/head';

// мои компоненты
import MainLayout from '../../components/common/MainLayout';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import CreditFilter from '../../components/finance/CreditFilter';
import CreditList from '../../components/common/CreditList';

const Credit = props => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanType, setLoanType] = useState(0);
  const [loanDuration, setLoanDuration] = useState(0);
  const [city, setCity] = useState(0);
  const [loanList, setLoanList] = useState({});
  const [loader, setLoader] = useState(false);

  // проверяет что в url(type, city) и записывает в state 
  useEffect(() => {
    props.url.query.type === 'kredit' && setLoanType(0)
    props.url.query.type === 'kredit_bez_spravok' && setLoanType(1)
    props.url.query.type === 'kredit_bez_zaloga' && setLoanType(2)
    props.url.query.type === 'kredit_nalichnyimi' && setLoanType(3)
    props.url.query.type === 'kredit_pod_zalog' && setLoanType(4)
    props.url.query.type === 'ekspress-kredit' && setLoanType(5)
    props.url.query.type === 'potrebitelskie-kredity' && setLoanType(6)
    localStorage.getItem('cityIdx') ? setCity(localStorage.getItem('cityIdx')) : setCity(0)
  }, [])

  const creditType = landingFilters.filter(
    val => val.link === props.url.query.type
  )

  return (
    <MainLayout creditType={creditType[0]} city={props.url.query.city} >
      <Head
        title={`${creditType[0].title1} ${cityTranslit(props.url.query.city)} ${creditType[0].title2}`}
        description={`${creditType[0].desc1} ${cityTranslit(props.url.query.city)} ${creditType[0].desc2}`}
      />
      <BreadCrumbs crumbs={crumbs} />
      <Query query={GET_CITIES}>
        {({ loading, error, data }) => {
          if (loading) return <div />
          if (error) return <div>{error}</div>
          // компонент фильтра (и внутри компонент со списком из кредитов)
          return (
            <React.Fragment>
              <CreditFilter
                duration={duration} amount={loanAmount} setAmount={setLoanAmount} landingFilters={landingFilters}
                loanType={loanType} setLoanType={setLoanType} city={city} setCity={setCity}
                loanDuration={loanDuration} setLoanDuration={setLoanDuration} cities={data.getCities}
                url={props.url} setLoanList={setLoanList} setLoader={setLoader}
              />
              <CreditList 
                loanList={loanList} loanType={loanType} loader={loader} creditType={creditType}
                url={props.url} loanAmount={loanAmount}
              />
            </React.Fragment>
          )
        }}
      </Query>

    </MainLayout>
  );
};

export default withData(Credit);