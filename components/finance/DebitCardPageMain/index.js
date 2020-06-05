import Coin from '../../icons/coin'
import Secure3D from '../../icons/secure3D'
import AppStore from '../../icons/appStore'
import PlayMarket from '../../icons/playMarket'
import PayWave from '../../icons/payWave'
import MasterCard from '../../icons/masterCard'
import Percentage from '../../icons/percatage'
import Visa from '../../icons/visa'
import Calendar from '../../icons/calendar'
import Button from '../../common/Button'
import SelectOne from '../../common/SelectOne'
import InputRange from '../../common/Input/InputRange'
import toValidCost from '../../common/toValidCost'
import Link from 'next/link'
import InputMask from 'react-input-mask'

import {
  Wrap,
  BankInfo,
  TextInfo,
  InfoTitle,
  InfoDescription,
  ImgInfo,
  CreditPrice,
  Block,
  Text,
  Price,
  Img,
  ImageBlock,
  InsideBlockItems,
  InfoBlock,
  MainInfo,
  AdvantageBlockItems,
  AdvantageBlock,
  MainInfoItem,
  BtnWrap,
  Title,
  Calculation,
  CalculateBlock,
  ResultBlock,
  InputWrapper,
  InputBlock,
  InputText,
  ResultTitle
} from './style'

class DebitCardMain extends React.Component {
  render() {
    console.log('data', this.props.data)
    return (
      <Wrap>
        <BankInfo>
          <TextInfo>
            <InfoTitle>{this.props.data.name}</InfoTitle>
            <InfoDescription>{this.props.data.description}</InfoDescription>
          </TextInfo>
          <ImgInfo>
            <img src={this.props.data.partnerLogo} />
          </ImgInfo>
        </BankInfo>
        <CreditPrice>
          <ImageBlock>
            <Img>
              <img src={this.props.data.cardLogo} />
            </Img>
          </ImageBlock>
          <InfoBlock>
            <AdvantageBlock>
              {this.props.data.pay_wave && (
                <AdvantageBlockItems>PayWave</AdvantageBlockItems>
              )}
              {this.props.data.visa && (
                <AdvantageBlockItems>Visa</AdvantageBlockItems>
              )}
              {this.props.data.mastercard && (
                <AdvantageBlockItems>MasterCard</AdvantageBlockItems>
              )}
              {this.props.data.secure3D && (
                <AdvantageBlockItems>Secure 3D</AdvantageBlockItems>
              )}
              {this.props.data.appStore && (
                <AdvantageBlockItems>AppStore</AdvantageBlockItems>
              )}
              {this.props.data.playMarket && (
                <AdvantageBlockItems>PlayMarket</AdvantageBlockItems>
              )}
              {this.props.data.freeDelivery && (
                <AdvantageBlockItems>FreeDelivery </AdvantageBlockItems>
              )}
            </AdvantageBlock>
            <MainInfo>
              <MainInfoItem>
                <InsideBlockItems>
                  <Coin />
                  <Price>
                    {' '}
                    до {this.props.data.ownBankWithdrawalLimit} тенге в месяц{' '}
                  </Price>
                  <Text>Лимит в своем банке</Text>
                </InsideBlockItems>
                <InsideBlockItems>
                  <Percentage />
                  <Price>{this.props.data.cashback}%</Price>
                  <Text>cashback</Text>
                </InsideBlockItems>
              </MainInfoItem>
              <MainInfoItem>
                <InsideBlockItems>
                  <Coin />
                  <Price>
                    {' '}
                    {this.props.data.ownBankWithdrawalCommission} тенге
                  </Price>
                  <Text>Коммисия</Text>
                </InsideBlockItems>
                <InsideBlockItems>
                  <Percentage />
                  <Price>{this.props.data.yearlyMaintenanceCost} тенге</Price>
                  <Text>cтоимость обслуживания </Text>
                </InsideBlockItems>
              </MainInfoItem>
            </MainInfo>

            <div>
              <BtnWrap>
                <a href={this.props.data.link} target="_blank">
                  <Button
                    height="40px"
                    color="#77BEFF;"
                    round="20px"
                    width="290px"
                    right="30px">
                    Оформить карту
                  </Button>
                </a>
                <Link>
                  <Button
                    height="40px"
                    color="#fff"
                    width="290px"
                    border="1px solid #77BEFF;"
                    round="20px"
                    fontColor="#77BEFF;">
                    Перейти на страницу банка
                  </Button>
                </Link>
              </BtnWrap>
            </div>
          </InfoBlock>
        </CreditPrice>
        {/*
        <BtnWrap>
          <Link
            href={`/finance/credit-registration?cid=${this.props.cid}&sum=${
              this.props.sumrange
            }&max=${this.props.max}&city=${this.props.city}`}>
            <Button
              height="40px"
              color="#77BEFF;"
              round="20px"
              width="290px"
              right="30px">
              Оформить кредит онлайн
            </Button>
          </Link>
          <Link
            href={`/finance/credit-calculation?cid=${this.props.cid}&max=${
              this.props.max
            }`}>
            <Button
              height="40px"
              color="#fff"
              width="290px"
              border="1px solid #77BEFF;"
              round="20px"
              fontColor="#77BEFF;">
              Расчитать кредит
            </Button>
          </Link>
        </BtnWrap>
        <Title>Расчет кредита</Title>
        <Calculation>
          <CalculateBlock>
            <InputWrapper>
              <InputText>Какая сумма вам нужна?</InputText>
              <InputBlock>
                <InputMask
                  width="100%"
                  value={
                    typeof this.props.sumrange == 'string'
                      ? parseInt(this.props.sumrange.replace(/\s/g, ''))
                      : this.props.sumrange
                  }
                  name="sumrange"
                  onChange={this.props.changeValueHandler}
                  mask={form}
                  maskChar={null}
                />
                <InputRange
                  max={this.props.max}
                  value={this.props.sumrange || 0}
                  name="sumrange"
                  onChange={this.props.changeValueHandler}
                />
              </InputBlock>
            </InputWrapper>
            <InputWrapper>
              <InputText>На какой срок?</InputText>
              <InputBlock>
                <SelectOne
                  bg="rgba(61, 196, 126, 0.3)"
                  items={months}
                  onChange={this.props.selectHandler}
                  width="260px"
                  name="activeMonth"
                  active={this.props.activeMonth}
                />
              </InputBlock>
            </InputWrapper>
          </CalculateBlock>
          <ResultBlock>
            <InputText>Ставка</InputText>
            <ResultTitle>{this.props.data.rate}%</ResultTitle>
            <InputText>Ежемесячный платеж</InputText>
            <ResultTitle>от {toValidCost(calculate.perMonth)} ₸</ResultTitle>
          </ResultBlock>
        </Calculation>
        <Link
          href={`/finance/credit-registration?cid=${this.props.cid}&sum=${
            this.props.sumrange
          }&max=${this.props.max}&city=${this.props.city}`}>
          <Button
            disabled={!this.props.sumrange}
            height="40px"
            color="#77BEFF;"
            round="20px"
            fontColor="#fff"
            width="290px">
            Отправить заявку
          </Button>
        </Link> */}
      </Wrap>
    )
  }
}

export default DebitCardMain
