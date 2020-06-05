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
`

export const CategoryOpenButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  width: max-content;
  height: 40px;
  background: ${props => (!props.active ? '#282F36' : 'none')};
  ${props => props.active && 'border: 1px solid #282F36'};
  border-radius: 5px;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${props => (props.active ? '#282F36' : '#fff')};
  cursor: pointer;
  user-select: none;
`

export const SearchBlock = styled.div`
  width: 686px;
  height: 40px;
  position: relative;
  margin-left: 40px;
  & > input {
    border: 1px solid #282f36;
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
  background: #282f36;
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

export const SearchResult = styled.div`
  position: absolute;
  display: ${props => (props.active && 'block') || 'none'};
  width: 100%;
  top: 63px;
  background: #fff;
  border-radius: 0 0 10px 10px;
  padding: 0 219px;
  box-sizing: border-box;
`
export const SearchResultWrap = styled.div``
export const SearchResultItem = styled.a`
  display: block;
  font-size: 16px;
  color: #282f36;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 15px;
  box-sizing: border-box;
  &:hover {
    background: #dcebf7;
  }
`

export const SearchResultItemImg = styled.div`
  width: 46px;
  height: 46px;
  margin-right: 10px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
