import withData from '../../lib/apollo';
import { crumbs } from './crumbs';
import Link from 'next/link';

import MainLayout from "../../components/common/MainLayout";
import Head from '../../components/head';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import DosCreditCardBanner from '../../components/common/DosCreditCardBanner';
import Access from '../../components/icons/access';
import Button from '../../components/common/Button';

import {
  Wrap,
  Wrapper,
  Text,
  ImgBlock,
  Img
} from './style';

const AccessPage = props => {
  return (
    <MainLayout noPreFooter>
      <Head />
      <BreadCrumbs crumbs={crumbs} />
      <Wrap>
        <Wrapper>
          <Access />
          <Text fs='24px' fw='bold' mb='10px'>Спасибо! Ваша заявка отправлена в банки</Text>
          <Text fs='16px' mb='40px'>Менеджер банка свяжется с вами в ближаейшее время</Text>
          
          <ImgBlock>
            {/* <Img src='https://unie-assets.ams3.digitaloceanspaces.com/finance/access-page/sber.png' /> */}
            <Img src='https://unie-assets.ams3.digitaloceanspaces.com/finance/access-page/hcb.png' />
            <Img src='https://unie-assets.ams3.digitaloceanspaces.com/finance/access-page/acb.png' />
            <Img src="https://unie-assets.ams3.digitaloceanspaces.com/alfatyp.png"/>
            <Img src="https://unie-assets.ams3.digitaloceanspaces.com/finance/tyicredit.png"/>
            <Img src="https://unie-assets.ams3.digitaloceanspaces.com/finance/tyhalyk.png"/>
          </ImgBlock>

          <Link href='/'>
            <Button color='#F18E67'>
              На главную страницу
            </Button>
          </Link>
        </Wrapper>
      </Wrap>
      <DosCreditCardBanner />
    </MainLayout>
  )
}

export default withData(AccessPage);