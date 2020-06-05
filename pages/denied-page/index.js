import withData from '../../lib/apollo';
import { crumbs } from './crumbs';
import Link from 'next/link';

import MainLayout from '../../components/common/MainLayout';
import Head from '../../components/head';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import DosCreditCardBanner from '../../components/common/DosCreditCardBanner';
import Button from '../../components/common/Button';
import Denied from '../../components/icons/denied';

import {
  Wrap,
  Wrapper,
  Text
} from './style';

const DeniedPage = props => {
  return (
    <MainLayout noPreFooter>
      <Head />
      <BreadCrumbs crumbs={crumbs} />
      <Wrap>
        <Wrapper>
          <Denied />
          <Text fs='24px' fw='bold' mb='10px'>К сожалению, вам отказали в получении кредита</Text>
          <Text fs='16px' mb='100px'>Причина: несоответствие требованиям банка</Text>
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

export default withData(DeniedPage);