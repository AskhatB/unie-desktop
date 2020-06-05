import styled from 'react-emotion'

export const Wrap = styled.a`
  width: 260px;
  min-height: 320px;
  overflow: hidden;
  border-radius: 7px;
  background: #fff;
  margin: 15px 0 30px;
  cursor: pointer;
`
export const Image = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  & > img {
    width: 150%;
    object-fit: contain;
    transition: transform 0.2s;
  }
  &:hover > img {
    transform: scale(1.2);
  }
`
export const InfoBlock = styled.div`
  padding: 10px 16px 10px;
`
export const Title = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: 16px;
  color: #282f36;
`
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  flex-flow: row wrap;
`
export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  font-size: 12px;
  margin-bottom: 10px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #282f36;
  & > svg {
    margin-right: 5px;
  }
  & > span {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    line-height: 20px;
    font-size: 18px;
    color: #282f36;
  }
`

export const Label = styled.div`
  position: absolute;
  background: #ffa34d;
  padding: 5px 10px;
  border-radius: 3px;
  left: 16px;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
`

export const CornerRound = styled.div`
  background: #fff;
  position: absolute;
  border-radius: 7px 0 0 0;
  right: 0;
  bottom: 0;
  padding: 0 10px;
  z-index: 5;
`
export const CornerRoundText = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  color: #282f36;
`
export const CornerRoundLabel = styled.div`
  font-size: 12px;
  color: #bcbec0;
  text-align: center;
`

export const Tags = styled.div`
  font-size: 12px;
  color: #bcbec0;
  & > span {
    margin: 0 5px;
  }
  &:last-child > span {
    display: none;
  }
`

export const TagList = styled.div`
  display: flex;
  margin-left: 15px;
  margin-bottom: 15px;
`
