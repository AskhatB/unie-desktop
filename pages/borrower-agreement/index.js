import withData from '../../lib/apollo';
import {data} from './data';

import MainLayout from '../../components/common/MainLayout';

import {
  Wrap, 
  Wrapper,
  Text
} from './style';

const BorrowerAgreement = props => {
  return (
    <MainLayout>
      <Wrap>
        <Wrapper>
          <Text fs='24px' ta='center' mb='20px' fw='600' mt='10px'>Согласие на сбор и обработку персональных данных</Text>
          {data.map((item, idx) => {
            return <Text key={idx}>{item.text}</Text>
          })}
        </Wrapper>
      </Wrap>
    </MainLayout>
  )
}

export default withData(BorrowerAgreement);