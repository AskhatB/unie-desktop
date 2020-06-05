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
import { AUTH } from './queries'
import { ApolloConsumer } from 'react-apollo'
import parsePhone from '../../../components/common/parsePhone'
import withData from '../../../lib/apollo'
import Router from 'next/router'

class SignIn extends React.Component {
  state = {
    phone: '',
    password: '',
    loading: false
  }

  authUser = async client => {
    this.setState({ loading: true })
    await client
      .mutate({
        mutation: AUTH,
        variables: {
          phone: this.state.phone,
          password: this.state.password
        }
      })
      .then(res => {
        localStorage.setItem('token', res.data.tokenAuth.token)
        this.setState({ loading: false })
        Router.push('/user/profile')
      })
      .catch(() => {
        this.setState({ loading: false })
      })
  }

  componentDidMount = () => {
    if (localStorage.getItem('token')) {
      Router.push('/user/profile')
    }
  }

  render() {
    return (
      <MainLayout section={5} bg="#51575c">
        <Head title="Вход | Unie.kz" />
        <Wrap>
          <Left>
            <img src="https://unie-assets.ams3.digitaloceanspaces.com/userpage/user1.jpg" />
          </Left>
          <Right>
            <Heading>Вход в систему</Heading>
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
                        onClick={() => this.authUser(client)}
                        disabled={this.state.loading}>
                        Войти
                      </Button>
                    )
                  }}
                </ApolloConsumer>
              </ControlBlock>
              <ToCreate>
                <ToCreateLeft>Впервые на Unie?</ToCreateLeft>
                <ToCreateRight href="/user/signup">
                  Создать аккаунт
                </ToCreateRight>
              </ToCreate>
            </UserBlock>
          </Right>
        </Wrap>
      </MainLayout>
    )
  }
}

export default withData(SignIn)
