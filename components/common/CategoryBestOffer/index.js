import {
  Wrap,
  Left,
  CatalogWrap,
  CatalogHeader,
  CatalogItems,
  CatalogItem,
  Right,
  BestOffer,
  BestOfferHeader,
  BestOfferDescription,
  InfoBlock,
  BestOfferImg,
  HiddenWrap,
  HiddenItemHeader,
  HiddenItems,
  HiddenItemsWrap,
  HiddenItem,
  HiddenHeader,
  HiddenHeaderItem,
  SliderControls,
  SliderWrap,
  HiddenFooter,
  IconWrap
} from './style'
import Button from '../Button'
import Link from 'next/link'
import banData from '../shopMainBanners'
import Slider from 'react-slick'
import ArrowIcon from '../../icons/arrowWide'
import OfficeIcon from '../../icons/categories/forOffice'
import LeatureTimeIcon from '../../icons/categories/leatureTime'
import EqupmentIcon from '../../icons/categories/equipment'
import Gifts from '../../icons/categories/gifts'
import Beauty from '../../icons/categories/beauty'
import HouseIcon from '../../icons/categories/house'
import CompTechIcon from '../../icons/categories/compTech'
import SportsIcon from '../../icons/categories/sports'
import AutoIcon from '../../icons/categories/auto'
import ElectronicsIcon from '../../icons/categories/electronics'
import ApillIcon from '../../icons/categories/appil'
import Baby from '../../icons/categories/baby'
import Fasion from '../../icons/categories/fasion'

class CategoryBestOffer extends React.Component {
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 3000
    }
    return (
      <Wrap>
        <Right>
          <SliderControls prev onClick={() => this.previous()}>
            <ArrowIcon rotate="0" color="#fff" />
          </SliderControls>
          <SliderControls next onClick={() => this.next()}>
            <ArrowIcon rotate="180" color="#fff" />
          </SliderControls>
          <SliderWrap>
            <Slider {...settings} ref={c => (this.slider = c)}>
              {banData.map(val => {
                return (
                  <BestOffer bg={val.bgImg}>
                    <InfoBlock>
                      <BestOfferHeader color={val.fontColor}>
                        {val.heading}
                      </BestOfferHeader>
                      <BestOfferDescription color={val.fontColor}>
                        {val.subheading}
                      </BestOfferDescription>
                      <a href={val.link}>
                        <Button
                          color="#fff"
                          width="max-content"
                          height="40px"
                          fontColor={val.buttonColor}
                          round="20px"
                          top="25px">
                          {val.buttonText}
                        </Button>
                      </a>
                    </InfoBlock>
                    <BestOfferImg>
                      <img src={val.mainImg} />
                    </BestOfferImg>
                  </BestOffer>
                )
              })}
            </Slider>
          </SliderWrap>
        </Right>
      </Wrap>
    )
  }
}
export default CategoryBestOffer
