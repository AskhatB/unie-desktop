import Link from 'next/link'
import { Wrap, Text, TitleText } from './style'

class BestOffersDebit extends React.Component {
  state = {
    activeText: false
  }
  render() {
    return (
      <Wrap>
        <TitleText>{this.props.title}</TitleText>
        {this.props.data.map((item, idx) => {
          return (
            <Link href={item.link} key={idx}>
              <Text>{item.name}</Text>
            </Link>
          )
        })}
      </Wrap>
    )
  }
}

export default BestOffersDebit
