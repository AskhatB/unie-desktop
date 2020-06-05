import { Wrap, InputWrap, InputLabel } from './style'
import Input from '../../common/Input/Input1'
import Button from '../../../components/common/Button'

const AutoLeftSidebar = props => {
  return (
    <Wrap>
      <InputWrap>
        <InputLabel>Модель</InputLabel>
        <Input width="100%" name="model" onChange={props.onInputChange} />
      </InputWrap>
      <InputWrap>
        <InputLabel>Марка</InputLabel>
        <Input width="100%" name="mark" onChange={props.onInputChange} />
      </InputWrap>
      <InputWrap>
        <InputLabel>Артикул</InputLabel>
        <Input width="100%" name="artikul" onChange={props.onInputChange} />
      </InputWrap>
      <InputWrap>
        <InputLabel>Название</InputLabel>
        <Input width="100%" name="name" onChange={props.onInputChange} />
      </InputWrap>
      <InputWrap>
        <InputLabel>ОЕМ</InputLabel>
        <Input width="100%" name="oem" onChange={props.onInputChange} />
      </InputWrap>
      <Button
        color="#2C5C9F"
        width="100%"
        height="40px"
        round="20px"
        top="20px"
        onClick={() => props.onShowResult()}>
        Найти
      </Button>
    </Wrap>
  )
}

export default AutoLeftSidebar
