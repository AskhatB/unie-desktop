import React from 'react'
import MainLayout from '../../../components/common/MainLayout'
import Head from '../../../components/head'
import withData from '../../../lib/apollo'

class FinanceHelp extends React.Component {
  render() {
    return (
      <MainLayout section={5} bg="#282F36" noFooter>
        <Head title="Unie помощник | Unie.kz" />
      </MainLayout>
    )
  }
}

export default withData(FinanceHelp)
