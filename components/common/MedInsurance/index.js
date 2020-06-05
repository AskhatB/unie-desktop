import Data from './data';
import { CREATE_INSURANCE, CREATE_INSURANCE_ORDER } from '../../../pages/insurance/insurance-category/insurance-type/queries';
import { ApolloConsumer } from 'react-apollo';
import Router from 'next/router';

import SelectOne from '../SelectOne';
import RadioBtn from '../RadioBtn';
import Close from '../../icons/close';
import Button from '../Button';

import {
  Wrap,
  Text,
  RadioWrap,
  AddToTourist,
  SelectWrapper,
  Btn
} from './style';

class MedInsurance extends React.Component {
  state = {
    country: 0,
    tripAim: 0,
    amount: 0,
    duration: 0,
    tourists: [
      {
        age: 0,
        name: 'age',
        title: 'Турист 1',
        btn: false
      }
    ]
  }
  // меняет значение в select
  changeInputValue = (i, e) => {
    const name = e.target.getAttribute('name')
    this.setState({
      [name]: i
    })
  }
  // меняет значение для radiobtn
  changeRadioValue = (i, name) => {
    this.setState({
      [name]: i
    })
  }
  // меняет возраст туристов
  touristChangeAgeHandler = (index, e) => {
    let listTourist = this.state.tourists.slice()
    let correctAgeIndex = parseInt(e)
    listTourist[index].age = correctAgeIndex
    this.setState({
      tourists: listTourist
    })
  }
  // добавить туриста
  addTourist = (idx, ta) => {
    let tourist = {
      age: 0,
      name: `age${idx + 1}`,
      title: `Турист ${ta + 1}`,
      btn: true
    }
    let newArray = [...this.state.tourists, tourist]
    this.setState({
      tourists: newArray
    })
  }
  // удалить туриста
  deleteTouristHanlder = idx => {
    let array = this.state.tourists
    let newArray = array.splice(idx, 1)
    this.setState({
      tourists: array
    })
  }

  render() {
    const countries = Data[3].map(item => item.name)
    let days = []
    for (let i = 0; i < 90; i++) {
      days.push( i + 1 )
    }

    let list = this.state.tourists.map((item, idx) => {
      return(
        <SelectWrapper>
          <SelectOne 
            title={item.title}
            items={days}
            mr='20px'
            name={item.name}
            active={item.age}
            onChange={e => this.touristChangeAgeHandler(idx, e)}
          />
          {item.btn && (
            <div style={{cursor: 'pointer'}} onClick={() => this.deleteTouristHanlder(idx)}><Close /></div>
          )}
        </SelectWrapper>
        )
    })

    let myJson = Object.assign(
      {},
      this.props.contactData,
      {
        countryName: Data[3][this.state.country].name,
        tripAim: Data[0][this.state.tripAim],
        tripDuration: Data[2][this.state.duration],
        age: days[this.state.tourists[0].age].toString(),
        insuranceAmount: Data[1][this.state.amount].name,
        insurancePayment: '1 000 евро',
        tourist2Age: this.state.tourists[1]
          ? days[this.state.tourists[1].age].toString()
          : null,
        tourist3Age: this.state.tourists[2]
          ? days[this.state.tourists[2].age].toString()
          : null,
        tourist4Age: this.state.tourists[3]
          ? days[this.state.tourists[3].age].toString()
          : null,
        tourist5Age: this.state.tourists[4]
          ? days[this.state.tourists[4].age].toString()
          : null
      }
    )

    console.log(days[this.state.tourists[0].age].toString())
    return (
      <Wrap>
        <SelectOne
          title='Страна пребывания'
          items={countries}
          name='country'
          active={this.state.country}
          onChange={this.changeInputValue}
          mb='30px'
        />
  
        <Text>Цель поездки</Text>
        <RadioWrap onClick={() => this.changeRadioValue(0, 'tripAim')}>
          <RadioBtn checked={this.state.tripAim == 0}>Туризм, деловые, гостевые поездки</RadioBtn>
        </RadioWrap>
  
        <RadioWrap onClick={() => this.changeRadioValue(1, 'tripAim')}>
          <RadioBtn>Спорт, участие в спортивных мероприятиях</RadioBtn>
        </RadioWrap>
  
        <RadioWrap onClick={() => this.changeRadioValue(2, 'tripAim')}>
          <RadioBtn>Работа по наиму или контракту за рубежом....</RadioBtn>
        </RadioWrap>
  
        <RadioWrap onClick={() => this.changeRadioValue(3, 'tripAim')}>
          <RadioBtn>Студенты, выезжающие на обучение</RadioBtn>
        </RadioWrap>
  
        <RadioWrap onClick={() => this.changeRadioValue(4, 'tripAim')}>
          <RadioBtn>Multy Travel (только для категории туризма)</RadioBtn>
        </RadioWrap>
  
        <SelectOne
          title='Страховая сумма'
          items={Data[1]}
          name='amount'
          active={this.state.amount}
          onChange={this.changeInputValue}
          mb='10px'
        />
  
        <SelectOne
          title='Продолжительность'
          items={Data[2]}
          name='duration'
          active={this.state.duration}
          onChange={this.changeInputValue}
          mb='30px'
        />
  
        <Text>Возраст туриста</Text>
        {list}
        
        {this.state.tourists.length < 5 && (
          <AddToTourist 
            onClick={() => this.addTourist(this.state.tourists.length, this.state.tourists.length)}
          >
            + добавить еще одного туриста
          </AddToTourist>
        )}

        <ApolloConsumer>
          {client => {
            return (
              <Btn>
                <Button
                  color='#F18E67' bs='0px 5px 20px rgba(40, 47, 54, 0.05)'
                  onClick={async () => {
                    await client.mutate({
                      mutation: CREATE_INSURANCE_ORDER,
                      variables: {
                        fio: this.props.contactData.fio,
                        email: this.props.contactData.email,
                        phone: this.props.contactData.phone,
                        cityID: this.props.cities[this.props.city].id,
                        iin: this.props.contactData.iin,
                        categoryName: this.props.contactData.categoryName,
                        productName: this.props.contactData.productName
                      }
                    }).then(res => {
                      client.mutate({
                        mutation: CREATE_INSURANCE,
                        variables: {
                          json: JSON.stringify(myJson)
                        }
                      }).then(res => {
                        Router.push(
                          `/thankyou-page?product=insurance&name=nomad&type=${
                            this.props.name
                          }`
                        )
                      })
                    })
                  }}
                >
                  Рассчитать
                </Button>
              </Btn>
            )
          }}
        </ApolloConsumer>

        <Btn>
          <Button
            bs='0px 5px 20px rgba(40, 47, 54, 0.05)' fontColor='#DFE0E1' border='1px solid #DFE0E1'
            onClick={() => this.props.setStep(this.props.step - 1)}
          >
            Назад
          </Button>
        </Btn>
      </Wrap>
    )
  }
}

export default MedInsurance;