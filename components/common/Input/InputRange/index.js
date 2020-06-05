import { InputR } from './style'

const InputRange = props => {
  return (
    <InputR
      width={props.width}
      value={props.val}
      name={props.name}
      step={props.step || '5000'}
      type="range"
      {...props}
    />
  )
}

export default InputRange
