import {
  Wrap,
  Header,
  Heading,
  ControlBlock,
  ControlLeft,
  ControlRight,
  Item
} from './style'

import Slider from 'react-slick'
import ArrowIcon from '../../icons/sliderArrow'

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
        {/* <ControlLeft onClick={() => this.previous()}>
          <ArrowIcon rotate="0" />
        </ControlLeft>
        <ControlRight onClick={() => this.next()}>
          <ArrowIcon rotate="180" />
        </ControlRight> */}
        <Header>
          <Heading>{this.props.title}</Heading>
        </Header>
        <Slider {...settings} ref={c => (this.slider = c)}>
          {this.props.data.map(val => {
            return (
              <Item>
                <img src={val.mediaUrl} />
              </Item>
            )
          })}
        </Slider>
      </Wrap>
    )
  }
}

export default ShopPartnerList
