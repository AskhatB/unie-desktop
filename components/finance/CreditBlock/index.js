import Link from 'next/link';

import Button from '../../common/Button';
import toValidCost from '../../common/toValidCost';
import { Wrap, Img, Block, Numb, Text } from './style';

const CreditBlock = props => {
  let doc = props.data.documentlist.map(item => {
    return <div>{item}</div>
  })

  return (
    <Wrap active={props.status == props.idx}>
      <Block width="110px">
        <Img>
          <img src={props.data.partnerLogo} />
        </Img>
      </Block>
      <Block width="150px">
        <Numb>от {props.data.rate} %</Numb>
        <Text>{props.data.name}</Text>
      </Block>
      <Block width="130px">
        <Numb>
          {props.data.maxAmount < 1000000000
            ? (props.data.minAmount < 1000000000 &&
                `от ${toValidCost(props.data.minAmount)} ₸ `) ||
              props.data.pawnPercentage + '%'
            : null}{' '}
          {props.data.maxAmount < 1000000000 ? <br /> : null}
          {(props.data.maxAmount < 1000000000 &&
            'до ' + toValidCost(props.data.maxAmount) + ' ₸') ||
            'до ' + props.data.pawnPercentage + '% стоимости залога'}
        </Numb>
        <Text>На срок до {props.data.maxLoanTerm} мес</Text>
      </Block>
      <Block width="205px">
        {/* {props.data.documentlist.map(item => {
          return <Text>{item}</Text>
        })} */}
        <Text>{doc[0]}</Text>
      </Block>
      <Block width="130px">
        <Text>Возраст от {props.data.minAge} лет</Text>
        <Text>Стаж от {props.data.workExperience} мес</Text>
      </Block>
      <Block width="162px">
        <Link
          href={`/credit-registration?cid=${props.data.id}&sum=${
            props.sumrangeValue
          }&max=${props.data.maxAmount}&city=${props.city}`}>
          <Button
            height="40px"
            width="160px"
            round="20px"
            color="#77BEFF;"
            fontColor="#fff"
            bottom="5px">
            Оформить
          </Button>
        </Link>
        <Link
          href={`/credit-page?id=${props.cid}&max=${
            props.data.maxAmount
          }&city=${props.city}`}>
          <Button
            height="40px"
            width="160px"
            fontColor="rgba(40, 47, 54, 0.5)"
            color="#fff"
            border="none">
            Подробнее
          </Button>
        </Link>
      </Block>
    </Wrap>
  );
};

export default CreditBlock;