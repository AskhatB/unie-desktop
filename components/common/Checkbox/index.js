import { Label, Input, Checkmark } from './style'

const Checkbox = props => {
  return (
    <Label color={props.color} mb={props.mb}>
      {props.children}
      <input
        type="checkbox"
        // onChange={e => props.onChange(e, props.id, props.children)}
        onChange={e => props.onChange(e)}
        checked={props.active}
        data-value={props.children}
        data-id={props.id}
      />
      <Checkmark />
    </Label>
  )
}

export default Checkbox
