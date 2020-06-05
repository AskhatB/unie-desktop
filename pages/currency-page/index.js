import { Currencies } from './queries';
import withData from '../../lib/apollo';
import { Query } from 'react-apollo';

import MainLayout from '../../components/common/MainLayout';
import Head from '../../components/head';
import Currency from '../../components/finance/Currency';

import { Wrap } from './style';

class CurrencyPage extends React.Component {
  state = {
    activeType: 0,
    activeMonth: 0,
    summa: 0,
    rate: 0,
    perMonth: 1,
    overpay: 0,
    data: ''
  }

  render() {
    return (
      <MainLayout bg="#77BEFF;" btnFont="#77BEFF;" section={1}>
        <Head title="Финансы | Unie.kz" />
        <Wrap>
          {!this.state.perMonth == 0 && (
            <Query query={Currencies}>
              {({ loading, error, data }) => {
                if (loading) return <div />
                if (error) return <div />
                return data.getCurrencies.map(el => {
                  return (
                    <Currency key={el.name} name={el.name} price={el.price} />
                  )
                })
              }}
            </Query>
          )}
        </Wrap>
      </MainLayout>
    )
  }
}

export default withData(CurrencyPage);