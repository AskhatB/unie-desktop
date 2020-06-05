import { Label, Input, Checkmark } from './style'

const RadioBtn = props => {
  return (
    <Label color={props.color}>
      {props.children}
      <Input type="radio" name="one" checked={props.checked} value={props.value} />
      <Checkmark bg={props.bg} />
    </Label>
  )
}

export default RadioBtn
