import { data } from './data';

import {
  Wrap,
  Text,
  Wrapper,
  Block,
  TextBlock,
} from './style';

const GetLoanGuide = props => {
  return (
    <Wrap>
      <Text mb='20px'>Как получить кредит?</Text>
      <Wrapper>
        {data.map((item, idx) => {
          return (
            <Block key={idx}>
              {item.logo}
              <TextBlock>
                <Text fs='14px' mb='5px'>{item.name}</Text>
                <Text fs='14px' color='#93979B' fw='300'>{item.desc}</Text>
              </TextBlock>
            </Block>
          )
        })}
      </Wrapper>
    </Wrap>
  )
}

export default GetLoanGuide;