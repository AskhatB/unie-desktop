import MainLayout from '../../../components/common/MainLayout'
import {
  Wrap,
  Left,
  Right,
  UserBlock,
  ControlBlock,
  Heading,
  ToCreate,
  ToCreateLeft,
  ToCreateRight
} from './style'
import Head from '../../../components/head'
import Input from '../../../components/common/Input/InputIcon'
import Button from '../../../components/common/Button'
import { SIGN_UP, AUTH } from './queries'
import Router from 'next/router'
import { ApolloConsumer } from 'react-apollo'
import withData from '../../../lib/apollo'
import parsePhone from '../../../components/common/parsePhone'

class SignIn extends React.Component {
  state = {
    phone: '',
    email: '',
    password: ''
  }
  registerUser = async client => {
    await client
      .mutate({
        mutation: SIGN_UP,
        variables: {
          phone: this.state.phone,
          password: this.state.password,
          email: this.state.email
        }
      })
      .then(() => {
        client
          .mutate({
            mutation: AUTH,
            variables: {
              phone: this.state.phone,
              password: this.state.password
            }
          })
          .then(res => {
            localStorage.setItem('token', res.data.tokenAuth.token)
            Router.push('/user/profile')
          })
      })
  }
  render() {
    return (
      <MainLayout section={5} bg="#51575c">
        <Head title="Регистрация | Unie.kz" />
        <Wrap>
          <Left>
            <img src="https://unie-assets.ams3.digitaloceanspaces.com/userpage/user1.jpg" />
          </Left>
          <Right>
            <Heading>Регистрация</Heading>
            <UserBlock>
              <Input
                type="phone"
                icon="user"
                width="290px"
                height="40px"
                placeholder="Телефон"
                left="30px"
                onChange={e =>
                  this.setState({ phone: parsePhone(e.target.value) })
                }
              />
              <Input
                type="email"
                icon="user"
                width="290px"
                height="40px"
                placeholder="E-mail"
                left="30px"
                top="20px"
                onChange={e => this.setState({ email: e.target.value })}
              />
              <Input
                type="password"
                icon="password"
                width="290px"
                height="40px"
                top="20px"
                placeholder="Пароль"
                left="30px"
                onChange={e => this.setState({ password: e.target.value })}
              />
              <ControlBlock>
                <ApolloConsumer>
                  {client => {
                    return (
                      <Button
                        color="#53585e"
                        width="max-content"
                        height="40px"
                        round="20px"
                        left="30px"
                        onClick={() => this.registerUser(client)}>
                        Войти
                      </Button>
                    )
                  }}
                </ApolloConsumer>
              </ControlBlock>
              <ToCreate>
                <ToCreateLeft>У меня уже есть аккаунт</ToCreateLeft>
                <ToCreateRight href="/user/signin">Войти</ToCreateRight>
              </ToCreate>
            </UserBlock>
          </Right>
        </Wrap>
      </MainLayout>
    )
  }
}

export default withData(SignIn)
