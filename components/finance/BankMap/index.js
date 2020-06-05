import { YMaps, Map, Placemark } from 'react-yandex-maps'
import { Wrap } from './style'

const BankMap = props => {
  return (
    <Wrap>
      <YMaps>
        <Map defaultState={{ center: [43.238293, 76.945465], zoom: 18 }}>
          <Placemark
            geometry={[43.238293, 76.945465]}
            defaultGeometry={[43.238293, 76.945465]}
            options={{
              iconLayout: 'default#image',
              iconImageSize: [3, 3],
              iconImageOffset: [-3, -35],
              iconOffset: true
            }}
          />
        </Map>
      </YMaps>
    </Wrap>
  )
}

export default BankMap
