import styled from 'react-emotion'

export const Wrap = styled.div`
  background: #fff;
  border-radius: 7px;
  box-sizing: border-box;
  padding: 40px 30px 20px 30px;
`
export const Title = styled.div`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: bold;
  line-height: 35px;
  font-size: 30px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #282f36;
  margin-bottom: 20px;
  & > span {
    color: #77BEFF;;
    cursor: pointer;
  }
`
export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`

export const AdditionalWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Block = styled.div``
export const Nav = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0 20px;
  border-bottom: 1px solid rgba(40, 47, 54, 0.15);
  margin-bottom: 30px;
`

export const Text = styled.div`
  color: rgba(0, 0, 0, 0.4);
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  font-size: 14px;
  margin-bottom: 5px;
`
export const Inputs = styled.div`
  position: relative;
  & > input {
    width: 260px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid rgba(40, 47, 54, 0.15);
    padding: 0 15px;
    color: rgba(40, 47, 54, 0.3);
    font-size: 14px;
    outline: none;
    color: #52585c;
  }
`

export const CenteredText = styled.div`
  text-align: center;
  color: #4c8269;
  font-weight: bold;
  line-height: 20px;
  font-size: 14px;
  font-family: Open Sans;
  font-style: normal;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto 15px;
  & > svg {
    margin-left: 5px;
  }
`
export const StyledText = styled.div`
  color: ${props => props.color || 'rgba(40, 47, 54, 0.5)'};
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  font-size: 16px;
  margin-right: ${props => props.marginRight || '40px'};
`

export const RightSideFiltr = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`
