import {
  Wrap,
  Header,
  Heading,
  ControlBlock,
  ControlLeft,
  ControlRight
} from './style'
import ProductCardOne from '../ProductCardOne'
import Slider from 'react-slick'
import ArrowIcon from '../../icons/sliderArrow'

class ProductListOne extends React.Component {
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
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      lazyLoad: true,
      arrows: false
    }
    return (
      <Wrap>
        <Header>
          <Heading>{this.props.title}</Heading>
        </Header>
        <ControlLeft onClick={() => this.previous()}>
          <ArrowIcon rotate="0" />
        </ControlLeft>
        <ControlRight onClick={() => this.next()}>
          <ArrowIcon rotate="180" />
        </ControlRight>
        <Slider {...settings} ref={c => (this.slider = c)}>
          {this.props.data.map(val => {
            return (
              <ProductCardOne
                key={val.id}
                {...val.node.product}
                withShadow
                left="auto"
                right="auto"
              />
            )
          })}
        </Slider>
      </Wrap>
    )
  }
}
export default ProductListOne
