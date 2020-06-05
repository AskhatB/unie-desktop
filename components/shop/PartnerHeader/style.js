import styled from 'react-emotion'

export const Wrap = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
`

export const Menu = styled.div`
  background: #2c5c9f;
  height: 60px;
  display: flex;
  align-items: center;
`

export const Layout = styled.div`
  width: 1150px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
`

export const Item = styled.a`
  display: flex;
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #fff;
  cursor: pointer;
`

export const Name = styled.div`
  font-size: 16px;
  font-family: Roboto Slab;
  color: #fff;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`

export const SubMenu = styled.div`
  display: flex;
  width: 1150px;
  height: 100%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`

export const SubMenuWrap = styled.div`
  background: #fff;
  width: 100%;
  height: 40px;
`

export const SubMenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &:hover {
    color: #2c5c9f;
    border-bottom: 2px solid #2c5c9f;
  }
`

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const CategoriesBlock = styled.div`
  width: 100%;
  background: #fff;
  overflow: hidden;
`
export const CategoriesItem = styled.div`
  width: 200px;
  margin-right: 10px;
`
export const CategoriesHeading = styled.a`
  display: block;
  font-weight: bold;
  font-size: 14px;
  color: #282f36;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    color: #2c5c9f;
  }
`
export const CategoriesSubHeading = styled.a`
  display: block;
  font-size: 14px;
  color: #53585e;
  margin-top: 5px;
  cursor: pointer;
  &:hover {
    color: #2c5c9f;
  }
`

export const CategoryWrap = styled.div`
  width: 1150px;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
`
