import Slider from 'react-slick'
import { Wrap, Title, List, Logo } from './style'

const PartnersBlock = props => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000
  }
  return (
    <Wrap>
      <Title>Партнеры</Title>
      <Slider {...settings}>
        {props.partners.edges.map(item => {
          return (
            <Logo>
              <img src={item.node.logoUrl} />
            </Logo>
          )
        })}
        {/* потом надо убрать, для численности */}
        {props.partners.edges.map(item => {
          return (
            <Logo>
              <img src={item.node.logoUrl} />
            </Logo>
          )
        })}
      </Slider>
    </Wrap>
  )
}

export default PartnersBlock
