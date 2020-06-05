import Link from 'next/link';
import { data } from './data';

import {
  Wrap,
  Text
} from './style';

const FooterLinks = props => {
  return (
    <Wrap>
      <Text fs='16px' fw='bold' color='#282F36' mb='15px'>Финансы</Text>
      {data.map((item, idx) => {
        return (
          <Link href={item.link}>
            <Text key={idx}
              fs='14px' color='#282F36' mb='15px' cursor='pointer'
            >
              {item.name}
            </Text>
          </Link>
        )
      })}
    </Wrap>
  )
}

export default FooterLinks;