import {
  Wrap,
  Header,
  Heading,
  ControlBlock,
  ControlLeft,
  ControlRight
} from './style'
import ProductCardOne from '../ProductCardOne'
import ControlArrowIcon from '../../icons/triangleArrow'
import Slider from 'react-slick'

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
          <ControlBlock>
            <ControlLeft onClick={() => this.previous()}>
              <ControlArrowIcon rotate="180" />
            </ControlLeft>
            <ControlRight onClick={() => this.next()}>
              <ControlArrowIcon rotate="0" />
            </ControlRight>
          </ControlBlock>
        </Header>
        <Slider {...settings} ref={c => (this.slider = c)}>
          {this.props.data.map(val => {
            return (
              <ProductCardOne
                key={val.id}
                {...val.product}
                withShadow
                left="10px"
              />
            )
          })}
        </Slider>
      </Wrap>
    )
  }
}
export default ProductListOne
