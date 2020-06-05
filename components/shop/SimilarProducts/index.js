import {
  Wrap,
  Header,
  Heading,
  Image,
  ProductWrap,
  Title,
  PriceBlock,
  Price,
  PriceLabel,
  Installment,
  InstallmentLabel,
  InstallmentPrice,
  ProductBlock
} from './style';
import toValidCost from '../../common/toValidCost';

const similarProduct = props => {
  return (
    <Wrap>
      <Header>
        <Heading>{props.title}</Heading>
      </Header>
      <ProductBlock>
        {props.data
          .map(val => {
            const price = props.minimalPrice;
            return (
              <ProductWrap href={`/shop/product?id=${val.oid}`}>
                <Image>
                  <img src={JSON.parse(val.mediaUrl).images[0]} />
                </Image>
                <Title>{val.name}</Title>
                <PriceBlock>
                  <Price borderStatus={price > 10000}>
                    <PriceLabel>{price && 'Цена от'}</PriceLabel>
                    {price
                      ? `${price && toValidCost(price)} ₸`
                      : ' Нет в наличии'}
                  </Price>
                  {price > 10000 && (
                    <Installment>
                      <InstallmentLabel>В рассрочку</InstallmentLabel>
                      <InstallmentPrice>
                        <PriceLabel right="5px">от</PriceLabel>
                        {toValidCost(Math.round(price / 12))}
                        <PriceLabel left="5px">x12 мес</PriceLabel>
                      </InstallmentPrice>
                    </Installment>
                  )}
                </PriceBlock>
              </ProductWrap>
            );
          })
          .slice(0, 4)}
      </ProductBlock>
    </Wrap>
  );
};

export default similarProduct;
