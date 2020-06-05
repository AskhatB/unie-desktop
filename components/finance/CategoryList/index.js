import Data from './data'
import Link from 'next/link'
import { Wrap, Text } from './style'

class CategoryList extends React.Component {
  state = {
    activeText: false
  }
  render() {
    return (
      <Wrap>
        {Data.map((item, idx) => {
          console.log(item)
          return (
            <Link href={item.link}>
              <Text key={idx}>
                {item.logo}
                {item.name}
              </Text>
            </Link>
          )
        })}
      </Wrap>
    )
  }
}

export default CategoryList
