import React from 'react';
import { 
  Wrap, 
  Header,
  Heading,
  Image,
  ProductWrap,
  ProductBlock,
  Title,
  PriceBlock,
  PriceLabel,
  Price,
  Installment,
  InstallmentLabel,
  InstallmentPrice,
  OfferAmount,
} from './style';
import toValidCost from '../../common/toValidCost';
import Link from 'next/link'

class LookedRecently extends React.Component {
	render() {
    if (typeof window === 'undefined') return <div />;
    const lookedRecetly = JSON.parse(localStorage.getItem('looked-recently'))
    console.log('daads', lookedRecetly)
    return (
      <Wrap>
        <Header>
          <Heading>Вы недавно смотрели</Heading>
        </Header>
        <ProductBlock>
          {lookedRecetly.map(val => {
            return (
              <Link 
                href={`/shop/product?id=${val.productOID}`}
                passHref prefetch>
                <ProductWrap>
                  <Image>
                    <img src={val.productImg}/>
                  </Image>
                  <Title>{val.productName}</Title>
                  <PriceBlock>
                    <Price borderStatus={val.productPrice > 10000}>
                      <PriceLabel>{val.productPrice && 'Цена от'}</PriceLabel>
                      {val.productPrice
                        ? `${val.productPrice && toValidCost(val.productPrice)} ₸`
                        : ' Нет в наличии'}
                    </Price>
                    {val.productPrice > 10000 && (
                      <Installment>
                        <InstallmentLabel>В рассрочку</InstallmentLabel>
                        <InstallmentPrice>
                          <PriceLabel right="5px">от</PriceLabel>
                          {toValidCost(Math.round(val.productPrice / 12))}
                          <PriceLabel left="5px">x12 мес</PriceLabel>
                        </InstallmentPrice>
                      </Installment>
                    )}
                  </PriceBlock>
                </ProductWrap>
              </Link>
            )
          }).slice(0, 4)}
        </ProductBlock>
      </Wrap>
            
		);
	}
}

export default LookedRecently;

    // console.log('localstorage', JSON.parse(localStorage.getItem('looked-recently'))[0].productOID)
    // <Link href={`/shop/product?id=${this.props.data[0].node.product.oid}`} passHref prefetch>