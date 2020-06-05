import ScrollContainer from '../ScrollContainer'
import { Item } from './style'

const TabScrollBlock = props => {
  return (
    <ScrollContainer jc={props.jc}>
      {props.items.map((item, idx) => {
        return (
          <Item
            width={props.width}
            fontSize={props.fontSize}
            key={idx}
            active={idx === props.tabStatus}
            borderColor={props.borderColor}
            onClick={() => props.changeActiveTabHandler(idx)}
            lcmargin={props.lcmargin}>
            {item}
          </Item>
        )
      })}
    </ScrollContainer>
  )
}

export default TabScrollBlock
