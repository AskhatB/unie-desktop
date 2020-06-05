import Link from 'next/link'
import { data } from './data';
 
import InsuranceCard from '../InsuranceCard';

import { Wrap, Text, InsuranceBlocks, TopStuff } from './style';

const MainInsuranceBanners = props => {
  return(
    <Wrap>
      <TopStuff>
        <Text>Страховая компания NOMAD</Text>
        <Link href='/insurance/insurance-category?name=nomad'>
          <Text cursor='pointer' fs='14px' fw='600' color='#77BEFF'>Все страхования</Text>
        </Link>
      </TopStuff>
      <InsuranceBlocks>
        {data.map((item, idx) => {
          return (
            <InsuranceCard key={idx} item={item} />
          )
        })}
      </InsuranceBlocks>
    </Wrap>
  )
}

export default MainInsuranceBanners;