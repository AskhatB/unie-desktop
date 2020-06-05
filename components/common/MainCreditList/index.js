import Link from 'next/link';
import Slider from 'react-slick'

import { Query } from 'react-apollo';
import { LOANS } from './queries';

import MainCreditCard from '../MainCreditCard';
import SliderBtn from '../SliderBtn';

import {
  Wrap,
  TopStuff,
  Text,
  Wrapper,
  Title
} from './style';

class MainCreditList extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next = () => {
    this.slider.slickNext();
  }
  previous = () => {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    }
    return (
      <Wrap>
        <TopStuff>
          <Title>Онлайн Кредиты</Title>
          <Link href='/credit?type=kredit&city=almaty'>
            <Text fw='600' fs='14px' color='#77BEFF' cursor='pointer'>Все кредиты</Text>
          </Link>
        </TopStuff>  
  
        <Query query={ LOANS } 
          variables={{ sumrange: 0, cityId: 1, loanTerm: 0, loanTypeId: 0 }}
        >
          {({loading, error, data}) => {
            if(loading) return <div />
            if(error) return <div>{error}</div>
            return(
              <Wrapper>
                <SliderBtn left='-20px' top='120px' onClick={this.previous} />
                <SliderBtn left='97%' top='120px' transform onClick={this.next} />  
                <Slider ref={c => (this.slider = c)} {...settings}>
                  {data.filterLoans.map(item => {
                    if(item.id === 65 || item.id == 47 || item.id === 4 || item.id === 48) return (
                      <MainCreditCard key={item.id} data={item} />
                    )
                  })}
                </Slider>
              </Wrapper>
            )
          }}
        </Query>
      </Wrap>
    )
  }
}

export default MainCreditList;