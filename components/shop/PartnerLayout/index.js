import { Wrap, Layout } from './style'
import Header from '../PartnerHeader'
import BestProductTwo from '../BestProductTwo'
import Footer from '../../common/Footer'

const ShopPartnerLayout = props => {
  return (
    <Wrap>
      <Header
        partnerId={props.partnerId}
        categories={props.categories}
        url={props.url}
        id={props.id}
        name={props.title}
      />
      {!props.noBanner && <BestProductTwo data={props.banners} />}
      <Layout>{props.children}</Layout>
      <Footer />
    </Wrap>
  )
}

export default ShopPartnerLayout
