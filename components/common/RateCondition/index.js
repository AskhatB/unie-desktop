import {
  Wrapper,
  RateInfo,
  Text
} from './style';

const RateCondition = props => {
  return (
    <React.Fragment>
      <Text mb='15px'>Ставка</Text>
      <Wrapper>
        <RateInfo width='300px'>
          <Text color='#93979B' fs='14px' fw='normal'>Номинальная ставка</Text>
          <Text>{props.data.rate} %</Text>
        </RateInfo>
        <RateInfo>
          <Text color='#93979B' fs='14px' fw='normal'>ГЭСВ</Text>
          <Text>{props.data.gesv} %</Text>
        </RateInfo>
      </Wrapper>
    </React.Fragment>
  )
}

export default RateCondition;