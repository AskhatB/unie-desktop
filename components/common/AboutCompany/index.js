import Link from 'next/link';

import Instagram from '../../icons/instagram';
import Facebook from '../../icons/facebook';

import {
  Wrap,
  Text,
  Icons
} from './style';

const AboutCompany = props => {
  return(
    <Wrap>
      <Text fs='16px' fw='bold' color='#282F36' mb='15px'>О компании</Text>
      <Link href='/about-page'>
        <Text fs='14px' color='#282F36' mb='15px' cursor='pointer'>О нас</Text>
      </Link>
      <Link href='/about-page'>
        <Text fs='14px' color='#282F36' mb='15px' cursor='pointer'>Контакты</Text>
      </Link>
      <Text fs='14px' color='#282F36' mb='15px' cursor='pointer'>Партнерам</Text>

      <Icons>
        <a href='https://www.instagram.com/2step.me/' target="_blank"><Instagram /></a>
        <a href='https://facebook.com/2stepme-2199891093422151/?modal=admin_todo_tour' target="_blank">
          <Facebook />
        </a>
      </Icons>
    </Wrap>
  )
}

export default AboutCompany;