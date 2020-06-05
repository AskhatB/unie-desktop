import MainLayout from '../../../components/common/MainLayout'
import Head from '../../../components/head'
import { Wrap, Left, Right, Heading } from './style'
import Router from 'next/router'

class SignIn extends React.Component {
  componentDidMount = () => {
    if (!localStorage.getItem('token')) {
      Router.push('/user/signin')
    }
  }
  render() {
    return (
      <MainLayout section={5} bg="#51575c">
        <Head title="Профиль | Unie.kz" />
        <Wrap>
          <Left>
            <img src="https://unie-assets.ams3.digitaloceanspaces.com/userpage/user2.jpg" />
          </Left>
          <Right>
            <Heading>
              Ваш профиль почти готов, нужно лишь немного подождать
            </Heading>
          </Right>
        </Wrap>
      </MainLayout>
    )
  }
}

export default SignIn
