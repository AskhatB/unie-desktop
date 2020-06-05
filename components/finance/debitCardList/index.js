import { DebitCards } from '../../../pages/debit-cards/queries'
import SelectOne from '../../../components/common/selectDebitFilter'
import DebitCardBlock from '../../../components/common/debitCardBlock'
import { Query } from 'react-apollo'
import { Wrap, Nav, StyledText, LeftSideFiltr, RightSideFiltr } from './style'

class DebitCardList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterCategories: ['Ставке', 'Лимиту', 'Cумме'],
      activeMonth: 0
    }
  }

  selectHandler = (i, e) => {
    const name = e.target.getAttribute('name')
    this.setState({ [name]: i })
  }

  render() {
    return (
      <Wrap>
        <Nav>
          {/* <LeftSideFiltr>
            <StyledText color={'#4C8269'}>Все банки</StyledText>
            <StyledText>Топ 100</StyledText>
            <StyledText>Топ 50</StyledText>
            <StyledText>Топ 10</StyledText>
          </LeftSideFiltr>
          <RightSideFiltr>
            <StyledText marginRight={'5px'}>Сортировка по: </StyledText>
            <SelectOne
              bg="rgba(61, 196, 126, 0.3)"
              items={this.state.filterCategories}
              active={this.state.activeMonth}
              width="95px"
              name="activeMonth"
              onChange={this.selectHandler}
            />
          </RightSideFiltr> */}
        </Nav>
        <Query
          query={DebitCards}
          variables={{
            withdrawalLimit: parseInt(this.props.sumrangeValue)
              ? parseInt(this.props.sumrangeValue)
              : 600000,
            cashBack: parseInt(this.props.avgValue)
              ? parseInt(this.props.avgValue)
              : 20,
            cityId: this.props.cities[this.props.activeCity].id,
            payWave: this.props.payWave,
            secure3D: this.props.secure3D,
            appStore: this.props.appStore,
            playMarket: this.props.playMarket,
            freeDelivery: this.props.freeDelivery,
            visa: this.props.visa,
            mastercard: this.props.mastercard,
            currency: this.props.currency,
            type: this.props.paymentSystem > 1 ? this.props.paymentSystem : 1
          }}>
          {({ loading, error, data }) => {
            if (loading) return <div />
            if (error) return <div>{error}</div>
            return data.filterDebitCards.map((item, idx) => {
              return (
                <DebitCardBlock
                  id={item.id}
                  name={item.name}
                  imageLink={item.cardLogo}
                  partnerName={item.partnerName}
                  partnerLogo={item.partnerLogo}
                  cashback={item.cashback}
                  cardRelease={item.cardRelease}
                  limit={item.ownBankWithdrawalLimit}
                  maintenanceCost={item.maintenanceCost}
                  currencies={item.currencies}
                  link={item.link}
                  city={this.props.city}
                />
              )
            })
          }}
        </Query>
      </Wrap>
    )
  }
}

export default DebitCardList
