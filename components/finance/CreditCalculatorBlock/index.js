import InputRange from '../../common/Input/InputRange'
import Input1 from '../../common/Input/Input1'
import Select1 from '../../common/Select/Select1'
import SelectOne from '../../common/SelectOne'
import Button from '../../common/Button'
import InputMask from 'react-input-mask'
import {
  Wrap,
  Title,
  Description,
  InputInner,
  Block,
  Text,
  InputWrap
} from './style'

class CreditClaculatorBlock extends React.Component {
  render() {
    let click
    if (this.props.type[this.props.activeType].name == 'Аннуитетный') {
      click = () =>
        this.props.annuity(
          this.props.rate,
          this.props.summa,
          Data[this.props.activeMonth].numb
        )
    } else if (
      this.props.type[this.props.activeType].name == 'Дифферициальный'
    ) {
      click = () =>
        this.props.differential(
          this.props.rate,
          this.props.summa,
          Data[this.props.activeMonth].numb
        )
    }
    let month = []
    month = Data.map(item => {
      return item.name
    })
    let type = []
    type = this.props.type.map(item => {
      return item.name
    })
    let form
    if (this.props.summa.toString().length == 3) {
      form = '9999'
    } else if (this.props.summa.toString().length == 4) {
      form = '9 9999'
    } else if (this.props.summa.toString().length == 5) {
      form = '99 9999'
    } else if (this.props.summa.toString().length == 6) {
      form = '999 9999'
    } else if (this.props.summa.toString().length == 7) {
      form = '9 999 9999'
    } else {
      form = '99 999 999'
    }
    return (
      <Wrap>
        <Title>Кредитный калькулятор</Title>
        <Description>
          Рассчитайте ставку и сумму кредиты быстро и легко.
        </Description>
        <InputInner>
          <Block>
            <Text>Сумма кредита</Text>
            <InputWrap>
              <InputMask
                value={
                  typeof this.props.summa == 'string'
                    ? parseInt(this.props.summa.replace(/\s/g, ''))
                    : this.props.summa
                }
                name="summa"
                mask={form}
                maskChar={null}
                onChange={this.props.changeValueHandler}
              />
              <InputRange
                max="10000000"
                value={this.props.summa || 0}
                name="summa"
                onChange={this.props.changeValueHandler}
              />
            </InputWrap>
          </Block>
          <Block>
            <Text>Ставка, %</Text>
            <InputWrap>
              <Input1
                width="260px"
                value={this.props.rate}
                name="rate"
                onChange={this.props.changeValueHandler}
              />
              <InputRange
                max="50"
                value={this.props.rate}
                name="rate"
                onChange={this.props.changeValueHandler}
              />
            </InputWrap>
          </Block>
          <Block>
            <Text>Срок, мес</Text>
            {/* <Select1
              width="260px"
              options={Data}
              active={this.props.activeMonth}
              name="activeMonth"
              onChange={this.props.changeValueHandler}
            /> */}
            <SelectOne
              width="260px"
              items={month}
              active={this.props.activeMonth}
              name="activeMonth"
              onChange={this.props.selectHandler}
            />
          </Block>
          <Block>
            <Text>Вид платежа</Text>
            {/* <Select1
              width="260px"
              options={this.props.type}
              active={this.props.activeType}
              name="activeType"
              onChange={this.props.changeValueHandler}
            /> */}
            <SelectOne
              width="260px"
              items={type}
              active={this.props.activeType}
              name="activeType"
              onChange={this.props.selectHandler}
            />
          </Block>
        </InputInner>
        <Button
          disabled={this.props.summa == 0 || this.props.rate == 0}
          width="180px"
          height="40px"
          round="20px"
          color="#77BEFF;"
          onClick={click}>
          Расчитать
        </Button>
      </Wrap>
    )
  }
}

export default CreditClaculatorBlock
