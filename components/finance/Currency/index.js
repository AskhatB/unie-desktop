import { Wrap, Outter, Inner } from './style'

class Currency extends React.Component {
  render() {
    return (
      <Wrap>
        <Outter>
          <Inner>{this.props.name}</Inner>
        </Outter>
        <Outter>
          <Inner>{this.props.price} ₸</Inner>
        </Outter>
      </Wrap>
    )
  }
}

export default Currency
