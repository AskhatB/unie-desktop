import Link from 'next/link';

import Button from '../Button';

import {
  Wrap,
  Wrapper,
  InfoBlock,
  Title,
  Description,
  Text,
  Img
} from './style';

const LoanPageMainInfo = props => {
  let type
  if (props.url.pathname === '/ipoteka-page') {
    type = (
      `/ipoteka-registration?cid=${props.data.id}&sum=${
        props.sumrange ? props.sumrange : 0
        }&max=${props.data.maxAmount}&city=${props.url.query.city}`
    )
  } else if (props.url.pathname === '/credit-page') {
    type = (
      `/credit-registration?cid=${props.data.id}&sum=${
        props.sumrange ? props.sumrange : 0
        }&max=${props.data.maxAmount}&city=${props.url.query.city}`
    )
  }

  console.log(type)
  return (
    <Wrap>
      <Wrapper>
        <InfoBlock>
          <Text>
            <Title>{props.data.name}</Title>
            <Description 
              dangerouslySetInnerHTML={{
                __html: props.data.description
              }}
            />
          </Text>
          <Img src={props.data.partnerLogo} />
        </InfoBlock>
        
        <Link href={type}>
          <Button color='#F18E67' width='280px' bs='0px 5px 20px rgba(40, 47, 54, 0.05)' right='16px'>
            Оформить
          </Button>
        </Link>

      </Wrapper>
    </Wrap>
  )
}

export default LoanPageMainInfo;