import { data, dataHome } from './data';
import Close from '../../icons/close';

import {
  Wrap,
  Bold,
  Text,
  Icon
} from './style';

const UserAccepted = props => {
  let conditions = dataHome
  return(
    <Wrap active={props.userAccepted}>
      <Icon onClick={props.click}>
        <Close />
      </Icon>
      <Bold>'Согласие пользователя о персональных данных и их защите'</Bold>
      {conditions.map((item, idx) => {
        return(
          <Text key={idx}>
            {item.name}
          </Text>
        )
      })}
    </Wrap>
  )
}

export default UserAccepted;