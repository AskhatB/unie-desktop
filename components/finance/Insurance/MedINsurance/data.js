import { getNames } from 'country-list'

let countries = []
for (let i = 0; i < getNames().length; i++) {
  countries.push({ name: getNames()[i] })
}

const medData = [
  [
    { name: 'Туризм, деловые поездки, гостевые поездки' },
    { name: 'Спорт, участие в спортивных мероприятиях или тренировках' },
    { name: 'Работа по наиму или контракту за рубежом' },
    { name: 'Студенты, выезжающие на обучение' },
    {
      name:
        'Multy Travel(только для категории туризм, деловые поездки, гостевые поездки)'
    }
  ],
  [{ name: '30 000 евро' }, { name: '50 000 евро' }, { name: '70 000 евро' }],
  [
    { name: '1год(180 дней)' },
    { name: '1год(90 дней)' },
    { name: '9месяцев(60 дней)' },
    { name: '6месяцев(45 дней)' },
    { name: '3месяца(30 дней)' },
    { name: '1месяц(15 дней)' }
  ],
  countries
]

export default medData
