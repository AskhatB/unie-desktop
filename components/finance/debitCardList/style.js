import styled from 'react-emotion'

export const Wrap = styled.div`
  background: #fff;
  border-radius: 7px;
  box-sizing: border-box;
  margin-top: 30px;
  padding: 0 30px 20px 30px;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0 20px;
  border-bottom: 1px solid rgba(40, 47, 54, 0.15);
  //margin-bottom: 30px;
`
export const Text = styled.div`
  width: ${props => props.width || 'auto'};
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  font-size: 16px;
  color: rgba(40, 47, 54, 0.5);
  margin-right: 40px;
  &:first-child {
    margin-left: 30px;
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

export const LeftSideFiltr = styled.div`
  display: flex;
  align-items: center;
`

export const RightSideFiltr = styled.div`
  display: flex;
  align-items: center;
`
