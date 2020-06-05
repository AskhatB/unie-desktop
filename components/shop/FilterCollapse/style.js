import styled from 'react-emotion'

export const Wrap = styled.div`
  background: #fff;
  border-radius: 10px;
`
export const Collapse = styled.div``
export const Header = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  user-select: none;
  align-items: center;
  padding: 0 25px;
  color: #282f36;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
  box-sizing: border-box;
  height: 59px;
  ${props => !props.active && 'border-bottom: 1px solid #dcddde'}
`
export const Name = styled.div``
export const Description = styled.div`
  padding: ${props => (props.isOpen && '25px') || '0'} 25px 0;
  box-sizing: border-box;
  overflow-y: auto;
  transition: ${props =>
    !props.isOpen
      ? 'max-height .5s cubic-bezier(0, 1, 0, 1)'
      : 'max-height .5s'};

  max-height: ${props => (props.isOpen ? '100vh' : 0)};
`
export const ProductAmount = styled.div`
  color: #939699;
  font-size: 12px;
`
export const CheckboxWrap = styled.div`
  display: flex;
  justify-content: space-between;
`
