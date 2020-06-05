import { Wrap, Collapse, Header, Name, Description, CheckBoxes } from './style'
import BoldArrow from '../../icons/boldArrow'
import Checkbox from '../../common/Checkbox'

class InstallmentCollapse extends React.Component {
  state = {
    active: true,
    monthStatus: '3'
  }

  onActiveChange = () => {
    this.setState({ active: !this.state.active })
  }

  monthStatusHandler = e => {
    const month = e.target.getAttribute('id')
    this.setState({ monthStatus: month })
  }

  render() {
    return (
      <Wrap>
        <Collapse>
          <Header
            onClick={() => this.onActiveChange()}
            active={this.state.active}>
            <Name>Партнеры</Name>
            <BoldArrow rotate={(this.state.active && '0') || '180'} />
          </Header>
          <Description isOpen={this.state.active}>
            <CheckBoxes>
              {this.props.data.map(val => {
                return <Checkbox color="#2C5C9F">{val.name}</Checkbox>
              })}
            </CheckBoxes>
          </Description>
        </Collapse>
      </Wrap>
    )
  }
}

export default InstallmentCollapse
