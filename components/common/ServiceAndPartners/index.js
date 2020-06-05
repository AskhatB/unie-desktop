import Link from 'next/link';

import {
  Wrap,
  Text
} from './style';

const ServiceAndPartners = props => {
  return(
    <Wrap>
      <Text fs='16px' fw='bold' color='#282F36' mb='15px'>Сервис и Поддержка</Text>
      <Link>
        <Text fs='14px' color='#282F36' mb='15px' cursor='pointer'>FAQ</Text>
      </Link>
      <Link>
        <Text fs='14px' color='#282F36' mb='40px' cursor='pointer'>Обратная связь</Text>
      </Link>

      <Text fs='16px' fw='bold' color='#282F36' mb='15px'>Партнерам</Text>
      <Link>
        <Text fs='14px' color='#282F36' mb='15px' cursor='pointer'>Вход в личный кабинет</Text>
      </Link>
      <Link>
        <Text fs='14px' color='#282F36' mb='40px' cursor='pointer'>Присоединиться </Text>
      </Link>
    </Wrap>
  )
}

export default ServiceAndPartners;