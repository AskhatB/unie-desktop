import TabScrollBlock from '../../common/TabScrollBlock'
import RateBlock from '../debitCardRateBlock'
import ConditionsBlock from '../DebitCardConditionsBlock'
import RequirementsBlock from '../RequirementsBlock'
import DebitCardFeatures from '../DebitCardFeatures'
import Button from '../../common/Button'
import Link from 'next/link'
import { Wrap } from './style'

class DebitCardAdditionally extends React.Component {
  state = {
    activeTab: 0
  }
  changeActiveTabHandler = idx => {
    this.setState({
      activeTab: idx
    })
  }
  render() {
    return (
      <Wrap>
        <TabScrollBlock
          jc="flex-start"
          changeActiveTabHandler={this.changeActiveTabHandler}
          tabStatus={this.state.activeTab}
          items={[
            'Тарифы',
            'Условия',
            'особенности',
            'Требования'
            // 'Отзывы',
            // 'Обзоры',
            // 'вопросы о кредите'
          ]}
        />
        {this.state.activeTab === 0 && <RateBlock data={this.props.data} />}
        {this.state.activeTab === 1 && (
          <ConditionsBlock data={this.props.data} />
        )}
        {this.state.activeTab === 2 && (
          <DebitCardFeatures data={this.props.data} />
        )}
        {this.state.activeTab === 3 && (
          <RequirementsBlock data={this.props.data} />
        )}
      </Wrap>
    )
  }
}

export default DebitCardAdditionally
