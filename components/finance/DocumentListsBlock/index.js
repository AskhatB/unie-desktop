import { Wrap, Text, DocumentList } from './style'

const DocumentListsBlock = props => {
  return (
    <Wrap>
      <Text>Важные документы</Text>
      <div>
        {props.data.documentlist.map(item => {
          return <DocumentList>{item}</DocumentList>
        })}
      </div>
    </Wrap>
  )
}

export default DocumentListsBlock
