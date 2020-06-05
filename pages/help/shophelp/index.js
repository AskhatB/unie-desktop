import React from 'react'
import MainLayout from '../../../components/common/MainLayout'
import Head from '../../../components/head'
import withData from '../../../lib/apollo'
import HelpShopNav from '../../../components/shop/HelpShopNav'

class ShopHelp extends React.Component {
  render() {
    return (
      <MainLayout section={5} bg="#282F36" noFooter>
        <Head title="Unie помощник | Unie.kz" />
        <HelpShopNav />
      </MainLayout>
    )
  }
}

export default withData(ShopHelp)
