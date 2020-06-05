import Link from 'next/link';

import AlreadySendIcon from '../../icons/alreadysend';
import Button from '../Button';

import {
  Wrap,
  Wrapper,
  Text
} from './style';

const AlreadySendBlock = props => {
  return (
    <Wrap>
      <Wrapper>
        <AlreadySendIcon />

        <Text fs='24px' fw='bold' color='#282F36' mb='10px' mt='30px'>Ваша заявка уже в обработке</Text>
        <Text fs='16px' color='#282F36' mb='30px'>Менеджер банка свяжется с вами в ближайшее время</Text>

        <Link href='/credit?type=kredit&city=almaty'>
          <Button color='#F18E67'>
            Вернутся в Кредиты
          </Button>
        </Link>
      </Wrapper>
    </Wrap>
  )
}

export default AlreadySendBlock;