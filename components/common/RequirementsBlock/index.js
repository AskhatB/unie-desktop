import {
  Wrap,
  Text,
  Item,
  Square,
} from './style';

const RequirementsBlock = props => {
  return (
    <Wrap>
      <Text fs='16px' fw='600' mb='16px'>Требования</Text>
      {props.data.requirements.map((item, idx) => {
        return (
          <Item key={idx}>
            <Square />
            <Text>{item}</Text>
          </Item>
        )
      })}
    </Wrap>
  )
}

export default RequirementsBlock;