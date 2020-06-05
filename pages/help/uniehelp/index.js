import React from 'react'
import MainLayout from '../../../components/common/MainLayout'
import Head from '../../../components/head'
import withData from '../../../lib/apollo'
import UnieHelpPage from '../../../components/shop/UnieHelp'

class UnieHelp extends React.Component {
  render() {
    return (
      <MainLayout section={5} bg="#282F36" noFooter>
        <Head title="Unie помощник | Unie.kz" />
        <UnieHelpPage />
      </MainLayout>
    )
  }
}

export default withData(UnieHelp)
