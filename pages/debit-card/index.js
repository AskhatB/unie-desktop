import withData from '../../lib/apollo';
import { Query } from 'react-apollo';
import { GET_DEBIT_CARD } from './query';
import { advantages } from './data';
import { crumbs } from './crumbs';

import MainLayout from '../../components/common/MainLayout';
import Head from '../../components/head';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import Button from '../../components/common/Button';

import {
  Wrap,
  Wrapper,
  CardBlock,
  Title,
  Img,
  CardInfo,
  Text,
  AdvantagesList,
  Square
} from './style';

const DeditCard = props => {
  return(
    <MainLayout noPreFooter>
      <Head 
        title="Бесплатно Visa Gold от Сбербанка с доставкой" 
        description="Высокий Cashback 1.3% за каждую покупку. 0% за выдачу и обслуживание. 0% комиссия за снятие и пополнение. Удобное мобильное приложение."
      />
      <BreadCrumbs crumbs={crumbs} />
      <Wrap>
        <Wrapper>
          <Query query={GET_DEBIT_CARD} variables={{id: 1}}>
            {({loading, error, data}) => {
              if (loading) return <div />
              if (error) return <div>{error}</div>
              return (
                <CardBlock>
                  <CardInfo>
                    <Title>{data.getDebitCard.name}</Title>
                    <Text mb='30px' fs='16px'>{data.getDebitCard.description}</Text>
                    
                    {advantages.map((item, idx) => {
                      return (
                        <AdvantagesList key={idx}>
                          <Square />
                          <Text mb='0'>{item}</Text>
                        </AdvantagesList>
                      )
                    })}
                    <a href={data.getDebitCard.link}>
                      <Button color='#F18E67' top='40px'>
                        Оформить заявку
                      </Button>
                    </a>

                  </CardInfo>
                  <Img src={data.getDebitCard.cardLogo} />
                </CardBlock>
              )
            }}
          </Query>
        </Wrapper>
      </Wrap>
    </MainLayout>
  )
}

export default withData(DeditCard);