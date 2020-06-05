import DeliveryIcon from '../../icons/delivery'
import RatingIcon from '../../icons/ratingIcon'
import MiniClock from '../../icons/miniClock'
import PriceIcon from '../../icons/price'
import toValidCost from '../../common/toValidCost'
import { Wrap, Image, MainInfo, Name, DeliveryInfo, Block, Tags } from './style'

const RestaurantMainPreview = props => {
  return (
    <Wrap>
      <Image>
        <img src={props.items.edges[0].node.previewUrl} />
      </Image>
      <MainInfo>
        <Name>{props.items.edges[0].node.name}</Name>
      </MainInfo>
      <DeliveryInfo>
        <Block>
          <PriceIcon />
          <span>{`от ${toValidCost(
            props.items.edges[0].node.delivery.price
          )} ₸`}</span>
        </Block>
        <Block>
          <RatingIcon />
          <span>{props.items.edges[0].node.rating}</span>
        </Block>
        {/* <Block>
          <MiniClock />
          <span>{props.items.edges[0].node.openinghoursSet.edges[0].node.toHour}</span>
        </Block> */}
        <Block>
          <DeliveryIcon />
          <span>
            Бесплатно при заказе от {props.items.edges[0].node.delivery.minSum}{' '}
            ₸
          </span>
        </Block>
      </DeliveryInfo>
      <Tags>
        {props.items.edges[0].node.tags.edges.map(item => {
          return (
            <div key={item.node.id}>
              {item.node.name}
              <span>,</span>
            </div>
          )
        })}
      </Tags>
    </Wrap>
  )
}

export default RestaurantMainPreview
