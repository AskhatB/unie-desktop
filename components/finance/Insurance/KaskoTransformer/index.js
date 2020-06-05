import SelectOne from '../../../common/SelectOne'
import Input1 from '../../../common/Input/Input1'
import InputRange from '../../../common/Input/InputRange'
import transData from './data'
import InputMask from 'react-input-mask'
import { Wrap, Block, Name, InputWrap } from './style'

const KaskoTransformer = props => {
  let age = []
  age = transData[0].map(item => {
    return item.name
  })
  let exp = []
  exp = transData[1].map(item => {
    return item.name
  })
  let type = []
  type = transData[2].map(item => {
    return item.name
  })
  let amou = []
  amou = transData[3].map(item => {
    return item.name
  })
  let aim = []
  aim = transData[4].map(item => {
    return item.name
  })
  let tAge = []
  tAge = transData[5].map(item => {
    return item.name
  })
  let fran = []
  fran = transData[14].map(item => {
    return item.name
  })
  let risks = []
  risks = transData[6].map(item => {
    return item.name
  })
  let month = []
  month = transData[7].map(item => {
    return item.name
  })
  let call = []
  call = transData[8].map(item => {
    return item.name
  })
  let paym = []
  paym = transData[9].map(item => {
    return item.name
  })
  let terr = []
  terr = transData[10].map(item => {
    return item.name
  })
  let antim = []
  antim = transData[11].map(item => {
    return item.name
  })
  let land = []
  land = transData[12].map(item => {
    return item.name
  })
  let period = []
  period = transData[13].map(item => {
    return item.name
  })
  let form
  if (props.transSumrange.toString().length == 3) {
    form = '9999'
  } else if (props.transSumrange.toString().length == 4) {
    form = '9 9999'
  } else if (props.transSumrange.toString().length == 5) {
    form = '99 9999'
  } else if (props.transSumrange.toString().length == 6) {
    form = '999 9999'
  } else if (props.transSumrange.toString().length == 7) {
    form = '9 999 9999'
  } else {
    form = '99 999 999'
  }
  return (
    <Wrap>
      <Block>
        <Name>Возраст</Name>
        <SelectOne
          width="260px"
          items={age}
          active={props.activeTransAge}
          name="activeTransAge"
          onChange={props.selectHandler}
        />
      </Block>
      <Block>
        <Name>Стаж</Name>
        <SelectOne
          width="260px"
          items={exp}
          active={props.activeTransExp}
          name="activeTransExp"
          onChange={props.selectHandler}
        />
      </Block>
      <Block>
        <Name>Вид транспорта</Name>
        <SelectOne
          width="260px"
          items={type}
          active={props.activeTransType}
          name="activeTransType"
          onChange={props.selectHandler}
        />
      </Block>
      <Block>
        <Name>Количество транспортного средства</Name>
        <SelectOne
          width="260px"
          items={amou}
          active={props.activeTransAmoun}
          name="activeTransAmoun"
          onChange={props.selectHandler}
        />
      </Block>
      <Block>
        <Name>Цель использования</Name>
        <SelectOne
          width="260px"
          items={aim}
          active={props.activeTransAim}
          name="activeTransAim"
          onChange={props.selectHandler}
        />
      </Block>
      <Block>
        <Name>Возраст транспортного средства</Name>
        <SelectOne
          width="260px"
          items={tAge}
          active={props.activetransTAge}
          name="activetransTAge"
          onChange={props.selectHandler}
        />
      </Block>
      <Block>
        <Name>Страховая сумма</Name>
        <InputWrap>
          <InputMask
            width="260px"
            value={
              typeof props.transSumrange == 'string'
                ? parseInt(props.transSumrange.replace(/\s/g, ''))
                : props.transSumrange
            }
            name="transSumrange"
            maskChar={null}
            onChange={props.changeValueHandler}
            mask={form}
          />
          <InputRange
            max="10000000"
            value={props.transSumrange || 0}
            name="transSumrange"
            onChange={props.changeValueHandler}
          />
        </InputWrap>
      </Block>
      <Block>
        <Name>Франшиза при повреждении</Name>
        <SelectOne
          width="260px"
          items={fran}
          active={props.activeTransFran}
          name="activeTransFran"
          onChange={props.selectHandler}
        />
      </Block>
      <Block>
        <Name>Риски</Name>
        <SelectOne
          width="260px"
          items={risks}
          active={props.activeTransRisks}
          name="activeTransRisks"
          onChange={props.selectHandler}
        />
      </Block>
      <Block>
        <Name>Срок страхования</Name>
        <SelectOne
          width="260px"
          items={month}
          active={props.activeTransMonth}
          name="activeTransMonth"
          onChange={props.selectHandler}
        />
      </Block>
      <Block>
        <Name>Вызов сотрудников Дорожной полиции на место происшествия </Name>
        <SelectOne
          width="260px"
          items={call}
          active={props.activeTransCall}
          name="activeTransCall"
          onChange={props.selectHandler}
        />
      </Block>
      <Block>
        <Name>Страховая выплата</Name>
        <SelectOne
          width="260px"
          items={paym}
          active={props.activeTransPaym}
          name="activeTransPaym"
          onChange={props.selectHandler}
        />
      </Block>
      <Block>
        <Name>Территория страхования</Name>
        <SelectOne
          width="260px"
          items={terr}
          active={props.activeTransTerr}
          name="activeTransTerr"
          onChange={props.selectHandler}
        />
      </Block>
      <Block>
        <Name>Противоугонное оборудование </Name>
        <SelectOne
          width="260px"
          items={antim}
          active={props.activeTransAntim}
          name="activeTransAntim"
          onChange={props.selectHandler}
        />
      </Block>
      <Block>
        <Name>Место нахождения ТС в ночное время</Name>
        <SelectOne
          width="260px"
          items={land}
          active={props.activeTransLand}
          name="activeTransLand"
          onChange={props.selectHandler}
        />
      </Block>
      <Block>
        <Name>Период безубыточности</Name>
        <SelectOne
          width="260px"
          items={period}
          active={props.activeTransPeriod}
          name="activeTransPeriod"
          onChange={props.selectHandler}
        />
      </Block>
      {/* <div></div> */}
    </Wrap>
  )
}

export default KaskoTransformer
