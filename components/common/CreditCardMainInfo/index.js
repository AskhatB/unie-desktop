import Button from '../Button';

import {
  Wrap,
  Inner,
  CardsView,
  CardsInfo,
  Text,
  CardsImg
} from './style';

const CreditCardMainInfo = props => {
  const scrollPage = (page) => {
    // тут уже скролим до высчитанного места
    props.window.scrollBy(page, page)
  }
  const calculatePage = () => {
    // тут высчитываем сколько до того места куда надо
    let page = 866 - props.window.pageYOffset
    scrollPage(page)
  }

  return(
    <Wrap>
      <Inner>
        <CardsView>
          <CardsInfo>
            <Text fs='24px' fw='600' mb='10px' color='#282F36'>{props.data.name}</Text>
            <Text fs='15x' mb='10px' color='#93979B'>{props.data.partnerName}</Text>
            <Text fs='14px' color='#53585E' mb='20px'>{props.data.description}</Text>
            <Button color='#F18E67' width='230px' 
                    height='50px' round='5px' 
                    bs='2px 1px 10px rgba(109, 139, 191, 0.05);'
                    onClick={calculatePage}
            >
              Оформить карту
            </Button>
          </CardsInfo>

          <CardsImg src={props.data.cardLogo} />
        </CardsView>
      </Inner>
    </Wrap>
  )
}

export default CreditCardMainInfo;