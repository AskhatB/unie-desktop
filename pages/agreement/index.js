import withData from '../../lib/apollo';
import {data} from './data';

import MainLayout from '../../components/common/MainLayout';

import {
  Wrap,
  Wrapper,
  Text,
  ListText,
  NumbList
} from './style';

const Agreement = props => {
  return (
    <MainLayout>
      <Wrap>
        <Wrapper>
          <Text ta='center' mb='10px' fs='24px' fw='bold'>Пользовательское соглашение</Text>
          <Text fw='bold' fs='16px'>{data[0].title}</Text>
          {data[0].point.map((item, idx) => {
            return(
              <React.Fragment>
                <Text key={idx}>{item.name}</Text>
                <ul>
                  {item.list && item.list.map((val, i) => {
                    return <ListText key={i}>{val.listname}</ListText>
                  })}
                </ul>
              </React.Fragment>
            )
          })}

          <Text fw='bold' fs='16px'>{data[1].title}</Text>
          {data[1].point.map((item, idx) => {
            return <Text key={idx}>{item.name}</Text>
          })}

          <Text fw='600' ta='center'>{data[2].title}</Text>
          {data[2].point.map((item, idx) => {
            return(
              <React.Fragment>
                <Text key={idx}>{item.name}</Text>
                <ol>
                  {item.list && item.list.map((val, i) => {
                    return <ListText key={i}>{val.listname}</ListText>
                  })}
                </ol>
              </React.Fragment>
            )
          })}

          <Text ta='center' fs='16px'>{data[3].title}</Text>
          <NumbList>
            {data[3].list.map((item, idx) => {
              return(
                <React.Fragment>
                  <ListText key={idx}>{item.listname}</ListText>
                  <NumbList>
                    {item.prelist && item.prelist.map((val, i) => {
                      return <ListText key={i}>{val.prelistname}</ListText>
                    })}
                  </NumbList>
                </React.Fragment>
              )
            })}
          </NumbList>

          <Text fw='600' ta='center' fs='16px'>{data[4].title}</Text>
          <NumbList>
            {data[4].list.map((item, idx) => {
              return(
                <React.Fragment>
                  <ListText key={idx}>{item.listname}</ListText>
                  <NumbList>
                    {item.prelist && item.prelist.map((val, i) => {
                      return <ListText key={i}>{val.prelistname}</ListText>
                    })}
                  </NumbList>
                </React.Fragment>
              )
            })}
          </NumbList>

          <Text fw='600' ta='center' fs='16px'>{data[5].title}</Text>
          <NumbList>
            {data[5].list.map((item, idx) => {
              return <ListText key={idx}>{item.listname}</ListText>
            })}
          </NumbList>
          
          <Text fw='600' ta='center' fs='16px'>{data[6].title}</Text>
          <NumbList>
            {data[6].list.map((item, idx) => {
              return <ListText key={idx}>{item.listname}</ListText>
            })}
          </NumbList>

          <Text fw='600' ta='center' fs='16px'>{data[7].title}</Text>     
          <NumbList>
            {data[7].list.map((item, idx) => {
              return <ListText key={idx}>{item.listname}</ListText>
            })}
          </NumbList>

          <Text fw='600' ta='center' fs='16px'>{data[8].title}</Text>
          <NumbList>
            {data[8].list.map((item, idx) => {
              return <ListText key={idx}>{item.listname}</ListText>
            })}
          </NumbList>

          <Text fw='600' ta='center' fs='16px'>{data[9].title}</Text>
          <NumbList>
            {data[9].list.map((item, idx) => {
              return <ListText key={idx}>{item.listname}</ListText>
            })}
          </NumbList>
        
          <Text fw='600' ta='center' fs='16px'>{data[10].title}</Text>
          <NumbList>
            {data[10].list.map((item, idx) => {
              return(
                <React.Fragment>
                  <ListText key={idx}>{item.listname}</ListText>
                  <NumbList>
                    {item.prelist && item.prelist.map((val, i) => {
                      return <ListText key={i}>{val.prelistname}</ListText>
                    })}
                  </NumbList>
                </React.Fragment>
              )
            })}
          </NumbList>
        </Wrapper>
      </Wrap>
    </MainLayout>
  )
}

export default withData(Agreement);