import SliderBtn from '../SliderBtn';

import {
  Wrap,
  Wrapper,
  Slider,
  Img
} from './style';

const Carousel = props => {
  const next = () => {
    console.log('top');
  }
  const previous = () => {
    console.log('bot');
  }

  return (
    <Wrap>
      <Wrapper>
        <Slider>
          <Img src="https://unie-assets.ams3.digitaloceanspaces.com/finance/desktop/maindesktopbanner.png"/>
          <Img src="https://unie-assets.ams3.digitaloceanspaces.com/finance/desktop/fiolet.png"/>
          <Img src="https://unie-assets.ams3.digitaloceanspaces.com/finance/desktop/green.png"/>

          <SliderBtn left='-20px' top='calc(200px - 20px)' onClick={previous} />
          <SliderBtn left='98%' top='calc(200px - 20px)' transform onClick={next} />
        </Slider>
      </Wrapper>
    </Wrap>
  )
}

export default Carousel;