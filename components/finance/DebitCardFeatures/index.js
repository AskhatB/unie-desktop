import { Wrap, Text, DocumentList } from './style'

const DebitCardFeatures = props => {
  // let additional_info = [
  //   'максимальная сумма выплаты Cashback 10 000 тенге на один счет в месяц',
  //   'Начисление cashback/баллов осуществляется только на основные платежные карточки/счета, открытые в национальной валюте',
  //   'Cashback/баллы не начисляются по безналичным операциям осуществленным за пределами Республики'
  // ]
  return (
    <div>
      <Wrap>
        <Text width="200px">Полезно знать:</Text>
        <div>
          {props.data.features.map((item, index) => {
            return (
              <DocumentList>
                {index + 1}. {item}
              </DocumentList>
            )
          })}
        </div>
      </Wrap>
      <Wrap>
        {props.data.additional_info[0] !== '' && (
          <div>
            <Text>Дополнительная информация: </Text>
            {props.data.additional_info.map((item, index) => {
              return (
                <Text>
                  {index + 1}. {item}
                </Text>
              )
            })}
          </div>
        )}
      </Wrap>
    </div>
  )
}

export default DebitCardFeatures
