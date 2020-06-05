import styled from 'react-emotion'

export const Wrap = styled.div`
  width: 100%;
  min-width: 1150px;
  position: sticky;
  top: -35px;
  left: 0;
  z-index: 991;
  box-shadow: 0px 5px 20px rgba(40, 47, 54, 0.05);
`
export const Layout = styled.div`
  height: 100%;
  margin: auto;
  background: #f8f8f8;
`
export const TopHeader = styled.div`
  width: 1150px;
  margin: auto;
  height: 37px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transition: top 0.3s;
`
export const ServiceList = styled.div`
  display: flex;
`
export const Name = styled.div`
  font-family: Open Sans;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-right: ${props => props.mr};
  color: #282F36;
  padding-top: 5px;
  border-top: ${props => props.bt}
`
export const HeadersCategory = styled.div`
  background: #fff
`
export const Wrapper = styled.div`
  width: 1150px;
  height: 60px;
  margin: auto;
  display: flex;
  align-items: center
`
export const Img = styled.img`
  cursor: pointer
`
export const CategoryName = styled.div`
  font-family: Open Sans;
  font-size: 16px;
  color: #282F36;
  margin-left: 35px;
  cursor: pointer;
  &:hover{
    color: #77BEFF
  }
`