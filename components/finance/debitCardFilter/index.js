import Button from '../../common/Button'
import InputRange from '../../common/Input/InputRange'
import CityTranslit from '../../common/CityTranslit'
import SelectOne from '../../../components/common/selectDebitFilter'
import InputMask from 'react-input-mask'
import NamedCheckBox from '../../common/NamedCheckbox'
import {
  Wrap,
  Title,
  Wrapper,
  Block,
  Text,
  Inputs,
  CenteredText,
  Nav,
  AdditionalWrapper,
  StyledText,
  RightSideFiltr
} from './style'

class DebitCardFilter extends React.Component {
  state = {
    showAdditionalFilters: false
  }

  showAdditionalFiltersHandler = () => {
    const prevShowAdditionalFilters = this.state.showAdditionalFilters
    this.setState({
      showAdditionalFilters: !prevShowAdditionalFilters
    })
  }

  render() {
    let form
    switch (this.props.sumrangeValue.toString().length) {
      case 1:
        form = '99'
        break
      case 2:
        form = '999'
        break
      case 3:
        form = '9999'
        break
      case 4:
        form = '9 9999'
        break
      case 5:
        form = '99 9999'
        break
      case 6:
        form = '999 9999'
        break
      case 7:
        form = '9 999 9999'
        break
      case 8:
        form = '99 999 999'
        break
      case 9:
        form = '999 999 999'
      default:
        form = '9'
    }

    return (
      <Wrap>
        <Title>
          Дебитовые карты в г.{' '}
          <span onClick={this.props.showCityPopup}>
            {CityTranslit(this.props.city)}
          </span>
        </Title>
        {/* <Nav>
          <StyledText color={"#4C8269"}>Все</StyledText>
          <StyledText>Кэшбэк</StyledText>
          <StyledText>Бонусы и скидки</StyledText>
          <StyledText>Для путешествий</StyledText>
        </Nav> */}
        <Wrapper>
          <Block>
            <Text>Лимит на снятие наличных</Text>
            <Inputs>
              <InputMask
                value={
                  typeof this.props.sumrangeValue == 'string'
                    ? parseInt(this.props.sumrangeValue.replace(/\s/g, ''))
                    : this.props.sumrangeValue
                }
                width="260px"
                name="sumrangeValue"
                onChange={this.props.changeValueHandler}
                mask={form}
                maskChar={null}
              />
              <InputRange
                max="1000000"
                value={this.props.sumrangeValue || 0}
                name="sumrangeValue"
                onChange={this.props.changeValueHandler}
              />
            </Inputs>
          </Block>
          <Block>
            <Text>Cashback</Text>
            <Inputs>
              <InputMask
                value={
                  typeof this.props.avgValue == 'string'
                    ? parseInt(this.props.avgValue.replace(/\s/g, ''))
                    : this.props.avgValue
                }
                width="260px"
                name="avgValue"
                onChange={this.props.changeValueHandler}
                mask={form}
                maskChar={null}
              />
              <InputRange
                max="100"
                value={this.props.avgValue || 0}
                name="avgValue"
                onChange={this.props.changeValueHandler}
              />
            </Inputs>
          </Block>
          <Button
            padding="0"
            width="190px"
            height="40px"
            color="#77BEFF;"
            btnFont="#fff"
            round="20px">
            Подобрать
          </Button>
        </Wrapper>
        <CenteredText onClick={() => this.showAdditionalFiltersHandler()}>
          {this.state.showAdditionalFilters === false
            ? 'Еще условия'
            : 'Скрыть'}
          <svg
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.74805 1L4.74805 4L7.74805 1"
              stroke="#4C8269"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </CenteredText>
        {this.state.showAdditionalFilters && (
          <AdditionalWrapper>
            <Block>
              <div>
                <RightSideFiltr>
                  <StyledText marginRight={'5px'}>Валюта </StyledText>
                  <SelectOne
                    bg="rgba(40, 47, 57, 0.8)"
                    items={this.props.currencies}
                    active={this.props.activeCurrency}
                    width="95px"
                    name="activeCurrency"
                    onChange={this.props.selectHandler}
                  />
                </RightSideFiltr>
                <NamedCheckBox
                  onChange={this.props.checkerHandler}
                  name={'payWave'}
                  color="#77BEFF;">
                  Бесконтактная оплата
                </NamedCheckBox>
                <NamedCheckBox
                  onChange={this.props.checkerHandler}
                  name={'secure3D'}
                  color="#77BEFF;">
                  3D Secure
                </NamedCheckBox>
              </div>
            </Block>
            <Block>
              <div>
                <RightSideFiltr>
                  <StyledText marginRight={'5px'}>
                    Платежная система:{' '}
                  </StyledText>
                  <SelectOne
                    bg="rgba(40, 47, 57, 0.8)"
                    items={this.props.paymentSystem}
                    active={this.props.activePaymentSystem}
                    width="95px"
                    name="activePaymentSystem"
                    onChange={this.props.selectHandler}
                  />
                </RightSideFiltr>
                <NamedCheckBox
                  onChange={this.props.checkerHandler}
                  name={'appStore'}
                  color="#77BEFF;">
                  Приложение в AppStore
                </NamedCheckBox>
                <NamedCheckBox
                  onChange={this.props.checkerHandler}
                  name={'playMarket'}
                  color="#77BEFF;">
                  Приложение в PlayMarket
                </NamedCheckBox>
              </div>
            </Block>
            <Block>
              <div>
                <RightSideFiltr>
                  <StyledText marginRight={'5px'}>Тип карты: </StyledText>
                  <SelectOne
                    bg="rgba(40, 47, 57, 0.8)"
                    items={this.props.cardType}
                    active={this.props.activeCardType}
                    width="95px"
                    name="activeCardType"
                    onChange={this.props.selectHandler}
                  />
                </RightSideFiltr>
                <NamedCheckBox
                  onChange={this.props.checkerHandler}
                  name={'freeDelivery'}
                  color="#77BEFF;">
                  Бесплатная доставка
                </NamedCheckBox>
              </div>
            </Block>
          </AdditionalWrapper>
        )}
      </Wrap>
    )
  }
}

export default DebitCardFilter
