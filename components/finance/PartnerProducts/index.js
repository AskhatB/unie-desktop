import TabScrollBlock from '../../common/TabScrollBlock'
import CreditBlock from '../../finance/CreditBlock'
import { Wrap, Categories } from './style'

class PartnerProducts extends React.Component {
  state = {
    activeTab: 0
  }
  changeActiveTabHandler = idx => {
    this.setState({ activeTab: idx })
  }
  render() {
    return (
      <Wrap>
        <Categories>
          <TabScrollBlock
            changeActiveTabHandler={this.changeActiveTabHandler}
            tabStatus={this.state.activeTab}
            items={['Кредиты']}
          />
        </Categories>
        {this.state.activeTab === 0 &&
          this.props.data.map((item, idx) => {
            return (
              <CreditBlock
                key={item.id}
                data={item}
                idx={idx}
                cid={item.id}
                sumrangeValue='0'
                city='almaty'
              />
            )
          })}
      </Wrap>
    )
  }
}

export default PartnerProducts
