import SendArrow from '../../../icons/sendArrow'
import { Input } from './style'

const FooterSearch = props => {
  return (
    <Input>
      <input type="text" placeholder="Введите ваш email" />
      <SendArrow />
    </Input>
  )
}

export default FooterSearch
