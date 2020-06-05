import SelectOne from '../../../common/SelectOne'
import Button from '../../../common/Button'
import Close from '../../../icons/close'
import medData from './data'
import { Wrap, Block, Name, Btn, InputInner } from './style'

class MedInsurance extends React.Component {
  state = {
    tourists: [
      {
        age: 0,
        name: 'age',
        title: 'Возраст Турист 1',
        btn: false
      }
    ]
  }
  touristChangeAgeHandler = (index, event) => {
    let listTourist = this.state.tourists.slice()
    let correctAgeIndex = parseInt(event)
    listTourist[index].age = correctAgeIndex
    this.setState({
      tourists: listTourist
    })
    this.props.getChildData(listTourist)
  }
  addTourist = (idx, ta) => {
    let tourist = {
      age: 0,
      name: `age${idx + 1}`,
      title: `Возраст Турист ${ta + 1}`,
      btn: true
    }
    let newArray = [...this.state.tourists, tourist]
    this.setState({
      tourists: newArray
    })
    this.props.getChildData(newArray)
  }
  deleteTouristHanlder = idx => {
    console.log('idx', idx)
    let array = this.state.tourists
    let newArray = array.splice(idx, 1)
    console.log('array', array)
    this.setState({
      tourists: array
    })
    this.props.getChildData(array)
  }
  render() {
    let count = []
    count = medData[3].map(item => {
      return item.name
    })
    let aim = []
    aim = medData[0].map(item => {
      return item.name
    })
    let sum = []
    sum = medData[1].map(item => {
      return item.name
    })
    let duration = []
    duration = medData[2].map(item => {
      return item.name
    })
    let days = []
    for (let i = 0; i < 90; i++) {
      days.push(i + 1)
    }
    let list = this.state.tourists.map((item, idx) => {
      return (
        <Block key={idx}>
          <Name>{item.title}</Name>
          <InputInner>
            <SelectOne
              width={item.btn == true ? '80%' : '100%'}
              items={days}
              active={item.age}
              name={item.name}
              onChange={e => this.touristChangeAgeHandler(idx, e)}
            />
            {item.btn == true && (
              <span onClick={() => this.deleteTouristHanlder(idx)}>
                <Close />
              </span>
            )}
          </InputInner>
        </Block>
      )
    })
    return (
      <Wrap>
        <Block>
          <Name>Страна пребывания</Name>
          <SelectOne
            width="260px"
            items={count}
            active={this.props.activeMedCount}
            name="activeMedCount"
            onChange={this.props.selectHandler}
          />
        </Block>
        <Block>
          <Name>Цель поездки</Name>
          <SelectOne
            width="260px"
            items={aim}
            active={this.props.activeMedAim}
            name="activeMedAim"
            onChange={this.props.selectHandler}
          />
        </Block>
        <Block>
          <Name>Страховая сумма</Name>
          <SelectOne
            width="260px"
            items={sum}
            active={this.props.activeMedSum}
            name="activeMedSum"
            onChange={this.props.selectHandler}
          />
        </Block>
        <Block>
          <Name>Продолжительность</Name>
          <SelectOne
            width="260px"
            items={duration}
            active={this.props.activeMedDuration}
            name="activeMedDuration"
            onChange={this.props.selectHandler}
          />
        </Block>
        {list}
        {this.state.tourists.length == 5 ? null : (
          <Btn>
            <Button
              width="190px"
              height="40px"
              round="20px"
              color="#77BEFF;"
              onClick={() =>
                this.addTourist(
                  this.state.tourists.length,
                  this.state.tourists.length
                )
              }>
              Добавить туриста
            </Button>
          </Btn>
        )}
      </Wrap>
    )
  }
}

export default MedInsurance
