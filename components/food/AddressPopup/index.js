import Close from '../../icons/close'
import Input1 from '../../common/Input/Input1'
import Button from '../../common/Button'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import { Wrap, Bg, Modal, Title, InputLine, Yandex } from './style'

const AddressPopup = props => {
  return (
    <Wrap>
      <Bg />
      <Modal>
        <span onClick={props.showAddressPopupHandler}>
          <Close />
        </span>
        <Title>Укажите адрес доставки</Title>
        <InputLine>
          <Input1
            color="#fff"
            bg="#D94646"
            border="none"
            width="85%"
            height="55px"
          />
          <Button width="100px" height="55px" color="#D94646" round="5px">
            Ок
          </Button>
        </InputLine>
        <Yandex>
          <YMaps>
            <Map defaultState={{ center: [43.238293, 76.945465], zoom: 18 }}>
              <Placemark
                geometry={[43.238293, 76.945465]}
                defaultGeometry={[43.238293, 76.945465]}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: '/static/redMark.svg',
                  iconImageSize: [0, 0],
                  iconImageOffset: [-3, -35],
                  iconOffset: true
                }}
              />
            </Map>
          </YMaps>
        </Yandex>
      </Modal>
    </Wrap>
  )
}

export default AddressPopup
