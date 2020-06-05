import {data} from './data';

import { Wrap, MainTitle, Block, Title, Description, Wrapper } from './style';

const WhyUnie = props => {
  return (
    <Wrap>
      <MainTitle>Почему выбирают Unie Финансы</MainTitle>
      <Wrapper>
        {data.map((item, idx) => {
          return(
            <Block key={idx}>
              {item.logo}
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
            </Block>
          )
        })}
      </Wrapper>
    </Wrap>
  );
};

export default WhyUnie;