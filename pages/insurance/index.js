import MainLayout from '../../components/common/MainLayout';
import Head from '../../components/head';
import withData from '../../lib/apollo';

const Insurance = props => {
  return (
    <MainLayout>
      <Head 
        title="Все виды страхования 〶 на 2step.me"
        description="Сервис по выбору и оформлению страхования. 
                   ➜ Выберите страхование с выгодными условиями. 
                   Оформите страховку по интернету, без комиссий 
                   по электронной почте или с доставкой на дом."
      />
    </MainLayout>
  )
}

export default withData(Insurance);