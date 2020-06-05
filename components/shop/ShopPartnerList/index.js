import {
  Wrap,
  Header,
  Heading,
  ControlBlock,
  ControlLeft,
  ControlRight,
  Item,
  Link
} from './style'
import ControlArrowIcon from '../../icons/triangleArrow'
import Slider from 'react-slick'

class ShopPartnerList extends React.Component {
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      lazyLoad: true,
      arrows: false,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000
    }
    return (
      <Wrap>
        <Header>
          <Heading>{this.props.title}</Heading>
          {/* <ControlLeft onClick={() => this.previous()}>
            <ControlArrowIcon rotate="180" />
          </ControlLeft>
          <ControlRight onClick={() => this.next()}>
            <ControlArrowIcon rotate="0" />
          </ControlRight> */}
        </Header>
        <Slider {...settings} ref={c => (this.slider = c)}>
          {this.props.data.map(val => {
            return (
              <Link href={`/shop/partner?id=${val.id}`}>
                <Item>
                  <img src={val.logoUrl} />
                </Item>
              </Link>
            )
          })}
        </Slider>
      </Wrap>
    )
  }
}

export default ShopPartnerList
