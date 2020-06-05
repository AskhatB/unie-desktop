import styled from 'react-emotion';

export const Wrap = styled.div`
  border: 1px solid #eeeeef;
  box-sizing: border-box;
  padding: 20px 25px;
  border-radius: 5px;;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden
`
export const Img = styled.img`
  width: 120px;
  margin-right: 20px
`
export const BtnWrap = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 20px
`
export const InfoBlock = styled.div`
  width: 70%
`
export const Text = styled.div`
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  color: ${props => props.color};
  margin-bottom: ${props => props.mb};
`
export const Conditions = styled.div`
  display: flex;
  justify-content: space-between
`
export const ConditionBlock = styled.div``
export const PromotionBlock = styled.div`
  min-width: ${props => props.width};
  position: absolute;
  top: 0;
  left: 0;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  line-height: 15px;
  font-size: 12px;
  color: #282f36;
  box-sizing: border-box;
  padding: ${props => props.padding};
  text-align: right;
  & > span{
    position: relative;
    z-index: 4
  }
`
export const Yellow = styled.div`
  background: #FFD954;
  width: 180px;
  height: 80px;
  transform: rotate(-18deg);
  position: absolute;
  top: -63px;
  left: -25px
`
export const Image = styled.div`
  width: 70px;
  position: relative;
  z-index: 5;
  margin: 2 0 0 8px;
  & > img{
    width: 100%
  }
`  
export const PromText = styled.div`
  background: ${props => props.bg};
  color: ${props => props.color};
  font-size: ${props => props.fs};
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  box-sizing: border-box;
  padding: ${props => props.padding};
  margin-left: ${props => props.ml};
  text-align: right;
  float: left

`
export const Prom = styled.div`
  width: max-content;
  position: relative;
  z-index: 5;
  float: left
`