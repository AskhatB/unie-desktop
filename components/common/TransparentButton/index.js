import { Button } from './style'

const TransparentButton = props => {
  return <Button {...props}>{props.children}</Button>
}

export default TransparentButton
