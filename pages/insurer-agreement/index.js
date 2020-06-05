import withData from '../../lib/apollo';
import {data} from './data';

import MainLayout from '../../components/common/MainLayout';

import {
  Wrap,
  Wrapper,
  Text,
} from './style';

const InsurerAgreement = props => {
  return (
    <MainLayout>
      <Wrap>
        <Wrapper>
          <Text ta='center' mb='20px' fw='600' fs='24px' mt='10px'>Согласие на сбор и обработку персональных данных</Text>
          {data.map((item, idx) => {
            return <Text key={idx}>{item.text}</Text>
          })}
        </Wrapper>
      </Wrap>
    </MainLayout>
  )
}

export default withData(InsurerAgreement);