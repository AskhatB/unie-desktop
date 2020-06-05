import {
  Wrap,
  LogoBlock,
  Img,
  InfoBlock,
  InfoBlockInner,
  Text,
  ContactInfo,
  Block
} from './style';

const PartnerInfo = props => {

  return (
    <Wrap>
      <LogoBlock>
        <Img src={props.data.logo} />
      </LogoBlock>
      <InfoBlock>
        <InfoBlockInner>
          <Text fs='24px' fw='bold' color='#282F36' mb='10px'>{props.data.name}</Text>
          <ContactInfo>
            <Block>
              <Text fs='14px' color='#BEC0C3'>Номер телефона</Text>
              <Text fs='14px' color='#282F36'>{props.data.telNumber}</Text>
            </Block>
            <Block>
              <Text fs='14px' color='#BEC0C3'>Почта</Text>
              <Text fs='14px' color='#282F36'>{props.data.mail}</Text>
            </Block>
            <Block>
              <Text fs='14px' color='#BEC0C3'>Адрес головного офиса</Text>
              <Text fs='14px' color='#282F36'>{props.data.headOfficeAddress}</Text>
            </Block>
          </ContactInfo>
          <Text width='80%' fs='14px' color='#282F36'>{props.data.description}</Text>
        </InfoBlockInner>
      </InfoBlock>
    </Wrap>
  )
}

export default PartnerInfo;