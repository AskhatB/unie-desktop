import Link from 'next/link';

import FooterLinks from '../FooterLinks';
import ServiceAndPartners from '../ServiceAndPartners';
import AboutCompany from '../AboutCompany';
import ShopEasterEgg from '../ShopEasterEgg';

import {
  Wrap,
  License,
  List,
  Text
} from './style';

const Footer = props => {
  return(
    <React.Fragment>
      <Wrap>
        <FooterLinks />
        <ServiceAndPartners />
        <AboutCompany />
        <ShopEasterEgg />
      </Wrap>
      <License>© TOO "Cloud Money", 2018-2019</License>
      <List>
        <Link href='/agreement'>
          <Text td='underline' cursor='pointer'>Пользовательское соглашение</Text>
        </Link>
        <Link href='/copyright'>
          <Text td='underline' cursor='pointer'>Политика конфиденциальности</Text>
        </Link>
        <Text>
          Согласие на сбор и обработку персональных данных для <Link href='/borrower-agreement'>
            <span>Заемщиков</span>
          </Link> и <Link href='/insurer-agreement'><span>Страхователям</span></Link>
        </Text>
      </List>
    </React.Fragment>
  )
}

export default Footer;