import withData from '../../lib/apollo';
import {data} from './data';

import MainLayout from '../../components/common/MainLayout';

import {
  Wrap,
  Wrapper,
  Text,
  ListText
} from './style';

const Copyright = props => {
  return (
    <MainLayout>
      <Wrap>
        <Wrapper>
          <Text ta='center' mb='10px' fs='24px' fw='bold' mt='15px'>Политика конфиденциальности</Text>
          <Text mb='10px' fs='13px'>Дата вступления в силу 2019 года</Text>
          
          <Text ta='center' mb='10px' fs='16px' fw='bold'>{data[0].title}</Text>
          {data[0].point.map((item, idx) => {
            return <Text fs='14px' mb='10px' key={idx}>{item.name}</Text>
          })}

          <Text ta='center' mb='10px' fs='16px' fw='bold'>{data[1].title}</Text>
          {data[1].point.map((item, idx) => {
            return <Text fs='14px' mb='10px' key={idx}>{item.name}</Text>
          })} 
          
          <Text ta='center' mb='10px' fs='16px' fw='bold'>{data[2].title}</Text>
          {data[2].point.map((item, idx) => {
            return (
              <React.Fragment>
                <Text fs='14px' mb='10px' key={idx}>{item.name}</Text>
                <ul>
                  {item.list && item.list.map((val, i) => {
                    return (
                        <ListText key={i}>{val.listname}</ListText>
                    )
                  })}
                </ul>
              </React.Fragment>
            )
          })}

          <Text ta='center' mb='10px' fs='16px' fw='bold'>{data[1].title}</Text>
          {data[3].point.map((item, idx) => {
            return <Text fs='14px' mb='10px' key={idx}>{item.name}</Text>
          })}

          <Text ta='center' mb='10px' fs='16px' fw='bold'>{data[2].title}</Text>
          {data[4].point.map((item, idx) => {
            return (
              <React.Fragment>
                <Text fs='14px' mb='10px' key={idx}>{item.name}</Text>
                <ul>
                  {item.list && item.list.map((val, i) => {
                    return (
                        <ListText key={i}>{val.listname}</ListText>
                    )
                  })}
                </ul>
              </React.Fragment>
            )
          })}
          <Text ta='center' mb='10px' fs='16px' fw='bold'>{data[1].title}</Text>
          {data[5].point.map((item, idx) => {
            return <Text fs='14px' mb='10px' key={idx}>{item.name}</Text>
          })}
        
          <Text ta='center' mb='10px' fs='16px' fw='bold'>{data[1].title}</Text>
          {data[6].point.map((item, idx) => {
            return <Text fs='14px' mb='10px' key={idx}>{item.name}</Text>
          })}
        </Wrapper>
      </Wrap>
    </MainLayout>
  )
}

export default withData(Copyright);