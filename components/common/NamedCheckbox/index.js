import { Label, Input, Checkmark } from './style'

const NamedCheckbox = props => {
  return (
    <Label color={props.color}>
      {props.children}
      <Input
        type="checkbox"
        onChange={event => props.onChange(event, props.name)}
        checked={props.active}
      />
      <Checkmark />
    </Label>
  )
}

export default NamedCheckbox
