import styled from 'react-emotion'

export const Wrap = styled.div`
  width: 100%;
  height: 62px;
  background: #fff;
  position: sticky;
  top: 60px;
  z-index: 999;
  border-bottom: 1px solid #ededed;
`

export const Layout = styled.div`
  width: 1150px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
`

export const CategoryOpenButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  width: max-content;
  height: 40px;
  background: ${props => (!props.active ? '#77BEFF;' : 'none')};
  ${props => props.active && 'border: 1px solid #77BEFF;'};
  border-radius: 5px;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${props => (props.active ? '#77BEFF;' : '#fff')};
  cursor: pointer;
  user-select: none;
`

export const SearchBlock = styled.div`
  width: 686px;
  height: 40px;
  position: relative;
  margin-left: 40px;
  & > input {
    border: 1px solid #77BEFF;;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    outline: 0;
    font-size: 14px;
    padding-left: 15px;
    box-sizing: border-box;
    color: #282f36;
  }
`

export const ButtonFind = styled.a`
  display: block;
  width: 83px;
  height: 100%;
  background: #77BEFF;;
  position: absolute;
  border-radius: 0 5px 5px 0;
  right: 0;
  top: 0;
  color: #fff;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`
export const RightIcons = styled.div`
  display: flex;
`
export const Icon = styled.div`
  display: flex;
  margin-left: 30px;
  cursor: pointer;
  & > svg {
    margin-right: 5px;
  }
  & > span {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 12px;
    color: #77BEFF;;
  }
`
