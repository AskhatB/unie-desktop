class CloudPayments extends React.Component {
  state = {};

  componentDidMount() {
    ((d, s, id, cb) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      js = d.createElement(s);
      js.id = id;
      js.src = '//widget.cloudpayments.kz/bundles/cloudpayments';
      js.async = true;
      fjs.parentNode.insertBefore(js, fjs);
      js.onload = cb;
    })(document, 'script', 'cp', () => {
      this.payHandle();
    });
  }

  payHandle = () => {
    const widget = new window.cp.CloudPayments();
    const { id, email, price } = this.props;
    widget.auth(
      {
        publicId: 'pk_b9f0e09f9076beb258370439473ca', // id из личного кабинета
        description: 'Оплата в unie.kz', // назначение
        amount: price, // сумма
        currency: 'KZT', // валюта
        invoiceId: id, // номер заказа  (необязательно)
        accountId: 1, // идентификатор плательщика (необязательно)
        email: email,
        data: {
          productId: 32 // произвольный набор параметров
        }
      },
      options => {
        console.log('OPTIONS', options);
      }
    );
  };

  render() {
    return <div />;
  }
}

export default CloudPayments;
