import Button from '../../common/Button'
import Input1 from '../../common/Input/Input1'
import Router from 'next/router'
import {
  Wrap,
  LeftSide,
  RightSide,
  Title,
  Info,
  Name,
  Wrapper,
  Light,
  DeliveryInfo,
  Text,
  Time,
  Amount,
  Main,
  SameText,
  Total,
  Btns,
  Inner
} from './style'

const FoodInfoForm = props => {
  return (
    <Wrap>
      <Inner>
        <LeftSide>
          <Title>Информация о покупателе</Title>
          <Info>
            <Name>Номер телефона</Name>
            <Input1 />
          </Info>
          <Info>
            <Name>ФИО</Name>
            <Input1 />
          </Info>
          <Info>
            <Name>Адресс доставки</Name>
            <Input1 />
          </Info>
          <Wrapper>
            <Input1 width="150px" />
            <Input1 width="150px" />
          </Wrapper>
          <Wrapper>
            <Input1 width="150px" />
            <Input1 width="150px" />
          </Wrapper>
          <Info>
            <Name>Комментарий к заказу</Name>
            <textarea />
            <Light>Опционально</Light>
          </Info>
          <DeliveryInfo>
            <Text>Время доставки</Text>
            <Time>30-40 мин</Time>
          </DeliveryInfo>
          <DeliveryInfo>
            <Text>Приборы</Text>
            <Amount>
              <div>-</div>
              <div>1</div>
              <div>+</div>
            </Amount>
          </DeliveryInfo>
        </LeftSide>
        <RightSide>
          <Main>Общий счет</Main>
          <div>
            <SameText>
              <div>Стоймость товара</div>
              <div>1000</div>
            </SameText>
            <SameText>
              <div>Доставка</div>
              <div>0</div>
            </SameText>
            <SameText>
              <div>Промокод:</div>
            </SameText>
          </div>
          <Total>
            <div>Сумма</div>
            <div>1000</div>
          </Total>
        </RightSide>
      </Inner>
      <Btns>
        <Button
          width="120px"
          height="40px"
          round="20px"
          fontColor="rgba(40, 47, 54, 0.5)"
          onClick={() => Router.back()}>
          Назад
        </Button>
        <Button width="120px" height="40px" round="20px" color="#FF4F52">
          Далее
        </Button>
      </Btns>
    </Wrap>
  )
}

export default FoodInfoForm
