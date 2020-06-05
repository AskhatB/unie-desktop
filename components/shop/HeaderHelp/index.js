import LogoIcon from '../../icons/logo'
import { Wrap, Layout, LeftSide, LogoWrap, Center, RightSide } from './style'

const Header = ({ bg }) => {
  return (
    <Wrap bg={bg}>
      <Layout>
        <LeftSide>
          <a href="/shop">
            <LogoWrap>
              <LogoIcon />
            </LogoWrap>
          </a>
        </LeftSide>
        <Center>Unie Помощник</Center>
        <RightSide>Aidyn</RightSide>
      </Layout>
    </Wrap>
  )
}

export default Header
