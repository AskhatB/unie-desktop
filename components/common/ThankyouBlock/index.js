import { LOAN, CARD } from '../../../pages/thankyou-page/queries';
import { Query } from 'react-apollo';
import Link from 'next/link';
import CityTranslit from '../CityTranslit';

import TYP from '../../icons/typ';
import Button from '../Button';

import {
  Wrap,
  Wrapper,
  Text,
  TextBlock
} from './style';

const ThankyouBlock = props => {
  var options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timezone: 'UTC'
  }

  let text
  if (props.url.product == 'insurance') {
    text = <Text fs='14px'>{CityTranslit(props.url.type)} от Номад</Text>
  }else if(props.url.product == 'credit-card') {
    if (props.url.id == 1) {
      text = <Text fs='14px'>КРЕДИТНАЯ КАРТОЧКА 'ДОС'</Text>
    } else {
      text = (
        <Query query={CARD} variables={{id: parseInt(props.url.id)}}>
          {({loading, error, data}) => {
            if (loading) return <div />
            if (error) return <div>{error}</div>
            return <Text fs='14px'>{data.getCreditCard.name}</Text>
          }}
        </Query>
      )
    }
  }else {
    text = (
      <Query
        query={LOAN}
        variables={{ id: props.url.id }}>
        {({ loading, error, data }) => {
          if (loading) return <div />
          if (error) return <div>{error}</div>
          return <Text fs='14px'>{data.getLoan.name}</Text>
        }}
      </Query>
    )
  }
  
  return (
    <Wrap>
      <Wrapper>
        <TYP />
        <Text fs='24px' color='#282F36' mb='10px' mt='30px' fw='bold'>Ваша заявка успешно отправлена.</Text>
        <Text fs='16px' color='#282F36' mb='12px'>Менеджеры банка свяжутся с вами в ближайшие сутки</Text>
        
        <TextBlock>
          <Text width='200px' fs='14px' color='rgba(40, 47, 54, 0.8);'>Дата:</Text>
          <Text fs='14px'>{new Date().toLocaleString('ru', options)}</Text>
        </TextBlock>
        
        <TextBlock mb='30px'>
          <Text width='200px' fs='14px' color='rgba(40, 47, 54, 0.8);'>Продукт:</Text>
          {text}
        </TextBlock>

        <Link href='/'>
          <Button color='#F18E67'>
            На главную страницу
          </Button>
        </Link>
      </Wrapper>
    </Wrap>
  )
}

export default ThankyouBlock;