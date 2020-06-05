import { useState } from 'react';
import Link from 'next/link';
import { data } from './data';

import ArrowDown from '../../icons/arrowDown';

import {
  Wrap,
  Block,
  HalfOfPreBlock,
  Text,
  OtherInfo,
  CreditText,
  Title
} from './style';

const PreFooter = props => {
  const [aboutInfo, setAboutInfo] = useState(false);
  const [linkInfo, setLinkInfo] = useState(false);

  let prefooter
  // по городу показываем определенный текст
  
  if (props.city && props.city === 'kazakhstan') {
    prefooter = <OtherInfo active={aboutInfo} dangerouslySetInnerHTML={{ __html: props.creditType.kzfooter }} />
  } else if (props.city && props.city === 'almaty') {
    prefooter = <OtherInfo active={aboutInfo} dangerouslySetInnerHTML={{ __html: props.creditType.almatyfooter }} />
  } else if (!props.city) {
    prefooter = <OtherInfo active={aboutInfo} dangerouslySetInnerHTML={{ __html: props.footer }} />
  }

  return (
    <Wrap>

      <Block>
        <HalfOfPreBlock onClick={() => setAboutInfo(!aboutInfo)} active={aboutInfo}>
          <Title>Почему именно 2Step Финансы?</Title>
          <ArrowDown />
        </HalfOfPreBlock>
        { prefooter }
      </Block>

      <Block>
        <HalfOfPreBlock onClick={() => setLinkInfo(!linkInfo)} active={linkInfo}>
          <Text>Кредиты</Text>
          <ArrowDown />
        </HalfOfPreBlock>
        <OtherInfo active={linkInfo} >
          {data.map((item, idx) => {
            return(
              <Link href={item.link}>
                <CreditText key={idx}>{item.name}</CreditText>
              </Link>
            )
          })}
        </OtherInfo>
      </Block>

    </Wrap>
  )
}

export default PreFooter;