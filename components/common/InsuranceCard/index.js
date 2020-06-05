import Link from 'next/link';

import {
  Wrap,
  Img,
  Text
} from './style';

const InsuranceCard = props => {
  return(
    <Wrap>
      <Img src={props.item.img} />
      <Text fs='16px' color='#282F36' fw='bold'>{props.item.title}</Text>
      <Text fs='14px' color='#282F36' mb='5px'>{props.item.description}</Text>
      <Link href={props.item.link}>
        <Text cursor='pointer' fs='14px' fw='bold' color='#77BEFF'>Расчет стоимости</Text>
      </Link>
    </Wrap>
  )
}

export default InsuranceCard;