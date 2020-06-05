import Link from 'next/link';

import { Title, Item, Main, Wrapper, Text } from './style';

const PartnersBlock = props => {
  return (
    <Main>
      <Title>Банки</Title>
      <Wrapper>
        {props.partners.map(
          // type = 1 банки
          (item, idx) =>
            item.type == 1 && (
              <Link href={`/partner?id=${item.id}`}>
                <Item key={idx}>
                  <img src={item.logo} />
                  <Text>{item.name}</Text>
                </Item>
              </Link>
            )
        )}
      </Wrapper>
    </Main>
  )
}

export default PartnersBlock;