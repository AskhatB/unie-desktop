import { Wrap, Tab } from './style'

const SwitcherTabs = props => {
  return (
    <Wrap>
      {props.tabs.map((val, indx) => {
        return (
          <Tab
            key={val}
            onClick={() => props.onTabChange(indx)}
            active={props.active === indx}>
            {val}
          </Tab>
        )
      })}
    </Wrap>
  )
}

export default SwitcherTabs
