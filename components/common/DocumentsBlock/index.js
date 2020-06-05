import {
  Text,
  Item,
} from './style';

const DocumentsBlock = props => {
  return (
    <React.Fragment>
      <Text fs='16px' fw='600' mb='16px'>Документы</Text>
      {props.data.documentlist.map((item, idx) => {
        return (
          <Item key={idx}>
            <Text>{item}</Text>
          </Item>
        )
      })}
    </React.Fragment>
  )
}

export default DocumentsBlock;