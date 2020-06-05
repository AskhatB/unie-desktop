import { getNames } from 'country-list'

let countries = []
for (let i = 0; i < getNames().length; i++) {
  countries.push({ name: getNames()[i] })
}

const Data = [
  [
    'Туризм, деловые поездки, гостевые поездки',
    'Спорт, участие в спортивных мероприятиях или тренировках',
    'Работа по наиму или контракту за рубежом',
    'Студенты, выезжающие на обучение',
    'Multy Travel(только для категории туризм, деловые поездки, гостевые поездки)'
  ],
  [ '30 000 евро', '50 000 евро', '70 000 евро' ],
  [
    '1год(180 дней)', '1год(90 дней)', '9месяцев(60 дней)', '6месяцев(45 дней)',
    '3месяца(30 дней)', '1месяц(15 дней)'
  ],
  countries
]

export default Data
