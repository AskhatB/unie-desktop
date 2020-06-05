import DeliveryIcon from '../../icons/delivery'
import RatingIcon from '../../icons/ratingIcon'
import PriceIcon from '../../icons/price'
import toValidCost from '../../common/toValidCost'
import {
  Wrap,
  Image,
  InfoBlock,
  Title,
  Info,
  Item,
  CornerRound,
  CornerRoundText,
  CornerRoundLabel,
  Tags,
  TagList
} from './style'

const RestaurantCard = props => {
  return (
    <Wrap
      href={`/food/partner?id=${props.item.oid}`}
      itemscope
      itemtype="http://schema.org/Organization">
      <Image>
        <CornerRound>
          <CornerRoundText>
            {props.item.delivery.time.slice(2).replace('_', ' - ')}
          </CornerRoundText>
          <CornerRoundLabel>мин</CornerRoundLabel>
        </CornerRound>
        <img itemProp="image" src={props.item.previewUrl} alt=" " />
      </Image>
      <InfoBlock>
        <Title itemProp="name">{props.item.name}</Title>
        <Info>
          <Item>
            <DeliveryIcon />
            {(props.item.delivery.price === 0 && 'Бесплатно') ||
              props.item.delivery.price + ' ₸'}
          </Item>
          <Item itemProp="aggregateRating">
            <RatingIcon />
            {props.item.rating}
          </Item>
          <Item>
            <PriceIcon />
            <span>{`от ${toValidCost(props.item.delivery.minSum)} ₸`}</span>
          </Item>
        </Info>
      </InfoBlock>
      <TagList>
        {props.item.tags.edges.map((val, idx) => {
          return (
            <Tags key={idx}>
              {val.node.name}
              <span>•</span>
            </Tags>
          )
        })}
      </TagList>
    </Wrap>
  )
}

export default RestaurantCard
