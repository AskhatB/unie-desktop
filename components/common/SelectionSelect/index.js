import { Label, Input, Checkmark, Text } from './style'

const SelectionSelect = props => {
  return(
    <Label color={props.color}>
      <Text>{props.children}</Text>
      <Input type="radio" name={props.name} checked={props.checked} value={props.value} />
      <Checkmark bg={props.bg} />
    </Label>
  )
};

export default SelectionSelect;