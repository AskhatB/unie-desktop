import Router from 'next/router';
import { categories } from './categories';
import CityTranslit from '../CityTranslit'

import {
  Wrap,
  Title,
  Wrapper,
  InsuranceBlock,
  Img,
  Text
} from './style';

const InsuranceCategories = props => {
  
  const addToRoter = (type, name) => {
    Router.push(
      `${props.url}/insurance-type?type=${CityTranslit(
        name
      )}&name=${CityTranslit(type)}`
    )
  }

  return(
    <Wrap>
      {categories.map((item, index) => {
        return(
          <React.Fragment>
            <Title key={index}>{item.type}</Title>
            <Wrapper>
              {item.insurance.map((val, idx) => {
                return(
                  <InsuranceBlock key={idx} onClick={() => addToRoter(item.type, val.name)}>
                    <Img src={val.img} />
                    <Text fs='16px' fw='bold' color='#282F36'>{val.name}</Text>
                    <Text fs='14px' color='#282F36' mb='5px'>{val.desc}</Text>
                    <Text color='#77BEFF' fs='14px'>Расчет стоимости</Text>
                  </InsuranceBlock>
                ) 
              })}
            </Wrapper>
          </React.Fragment>
        )
      })}
    </Wrap>
  )
}

export default InsuranceCategories;