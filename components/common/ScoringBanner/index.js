import Link from 'next/link';

import {
  Wrap,
  Img
} from './style';

const ScoringBanner = props => {
  return (
    <Wrap>
      <Link href='/selection-register'>
        <Img src='https://unie-assets.ams3.digitaloceanspaces.com/finance/scoringbanner.png' />
      </Link>
    </Wrap>
  )
}

export default ScoringBanner;