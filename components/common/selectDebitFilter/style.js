import styled from 'react-emotion'

export const Wrap = styled.div`
  height: 38px;
  position: relative;
  ${props =>
    (props.active && 'border-radius: 5px 5px 0 0') || 'border-radius: 5px'};
  cursor: pointer;
`
export const Select = styled.div`
  width: 100%;
  height: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #448aff;
`
export const SelectItem = styled.div`
  box-sizing: border-box;
  padding: 7px 15px;
  user-select: none;
  position: relative;
  &:hover {
    background: ${props => props.bg || '#e2f2fe'};
  }
`
export const SelectItems = styled.div`
  position: absolute;
  display: ${props => (props.active && 'block') || 'none'};
  background: #fff;
  top: 100%;
  max-height: 300px;
  left: -1px;
  border: 1px solid #dfe0e1;
  border-radius: 0 0 5px 5px;
  z-index: 1000;
`
export const Heading = styled.div`
  box-sizing: border-box;

  line-height: 40px;
  user-select: none;
  border-radius: 5px;
  background: #fff;
  overflow: hidden;
`

export const Arrow = styled.div``
export const Title = styled.div``

export const DropDownMenu = styled.div`
  display: flex;
  align-item: center;
`
