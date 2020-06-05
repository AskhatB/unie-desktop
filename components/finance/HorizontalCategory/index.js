import Link from 'next/link';
import {data} from './data';

import { Wrap, Block, Name, Img } from './style';

const HorizontalCategory = props => {
  return (
    <Wrap>
      {data.map((item, idx) => {
        return(
          <Link href={item.url}>
            <Block key={idx}>
              <Img>{item.src}</Img>
              <Name>{item.name}</Name>
            </Block>
          </Link>
        )
      })}
    </Wrap>
  );
};

export default HorizontalCategory;