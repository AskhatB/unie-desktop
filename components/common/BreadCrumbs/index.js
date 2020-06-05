import Link from 'next/link';

import {
  Wrap,
  Inner,
  Crumb,
  Dash
} from './style';

const BreadCrumbs = props => {
  return(
    <Wrap>
      <Inner>
        {props.crumbs.map((item, idx) => {
          return(
            <Link href={item.link}>
              <Crumb key={idx}>{item.name}<Dash>-</Dash></Crumb>
            </Link>
          )
        })}
      </Inner>
    </Wrap>
  )
}

export default BreadCrumbs;