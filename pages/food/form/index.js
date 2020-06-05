import MainLayout from '../../../components/common/MainLayout'
import Head from '../../../components/head'
import FoodInfoForm from '../../../components/food/FoodInfoForm'

const Form = props => {
  return (
    <MainLayout section={3} bg="#D94646">
      <Head title="Еда | Unie.kz" />
      <FoodInfoForm />
    </MainLayout>
  )
}

export default Form
