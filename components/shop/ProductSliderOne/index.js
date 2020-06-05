import { Wrap } from './style'
import Slider from 'react-slick'
import CollectionOne from '../CollectionOne'

const ProductSliderOne = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true
  }
  return (
    <Wrap>
      <Slider {...settings}>
        <CollectionOne />
        <CollectionOne />
      </Slider>
    </Wrap>
  )
}

export default ProductSliderOne
