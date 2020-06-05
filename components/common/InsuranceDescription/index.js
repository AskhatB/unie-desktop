import {
  Wrap,
  Title,
  Block,
  Img,
  InfoBlock,
  Text
} from './style';

const InsuranceDescription = props => {
  return (
    <Wrap>
      <Title>Страхование от Nomad</Title>
      <Block>
        <Img src='https://unie-assets.ams3.digitaloceanspaces.com/finance/logo-nomaad.png' />
        <InfoBlock>
          <Text fs='12px' color='#93979B'>Nomad Insurance</Text>
          <Text fs='14px' color='#282F36'>Получение решения о кредите или покупки страхового полиса без очередей и расходов на поездки</Text>
        </InfoBlock>
      </Block>
    </Wrap>
  )
}

export default InsuranceDescription;