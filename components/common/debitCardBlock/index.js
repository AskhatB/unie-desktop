import { GET_PARTNER } from '../../../pages/credit-page/queries'
import Button from '../../common/Button'
import Link from 'next/link'
import { graphql } from 'react-apollo'
import {
  Wrap,
  Img,
  Block,
  Numb,
  Text,
  GreyText,
  CardPartner,
  CardName,
  ImageBlock
} from './style'

const DebitCardBlock = props => {
  // console.log('doc', doc[0])

  return (
    <Wrap>
      <div style={{ display: 'flex' }}>
        <ImageBlock>
          <Img>
            <img src={props.imageLink} />
          </Img>
        </ImageBlock>
        <Block>
          <CardPartner>{props.partnerName}</CardPartner>
          <CardName>{props.name}</CardName>
          <Numb>
            {' '}
            от {props.cashback}% <GreyText>cashback</GreyText>
          </Numb>
          <Numb>
            {' '}
            до {props.limit}т. <GreyText> лимит</GreyText>
          </Numb>
          <Numb>
            {' '}
            от {props.maintenanceCost}т. в год{' '}
            <GreyText>стоимость обслуживания</GreyText>
          </Numb>
        </Block>
      </div>
      <Block width="160px" margin="20px">
        <a href={props.link} target="_blank">
          <Button
            height="40px"
            width="160px"
            round="20px"
            color="#77BEFF;"
            fontColor="#fff"
            bottom="5px">
            Оформить
          </Button>
        </a>
        <Link
          href={`/finance/debit-card-page?id=${props.id}&city=${props.city}`}>
          <Button
            height="40px"
            width="160px"
            fontColor="rgba(40, 47, 54, 0.5)"
            color="#fff"
            border="none">
            Подробнее
          </Button>
        </Link>
      </Block>
    </Wrap>
  )
}

export default DebitCardBlock
