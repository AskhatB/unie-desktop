import Link from 'next/link';

import {
  Wrap
} from './style';

const MainCalculationBlock = props => {
  return (
    <Wrap>
      <Link href='/credit-calculator'>
        <img src="https://unie-assets.ams3.digitaloceanspaces.com/finance/main-page/maindesktopcalculator.png" />
      </Link>
    </Wrap>
  )
}

export default MainCalculationBlock;